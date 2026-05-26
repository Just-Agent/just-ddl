import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';

const rootDir = process.cwd();
const distIndex = path.join(rootDir, 'dist', 'index.html');
const previewPort = Number(process.env.JUST_DDL_QA_PORT || 4187);
const cdpPort = Number(process.env.JUST_DDL_CDP_PORT || 9237);
const basePath = process.env.JUST_DDL_QA_BASE_PATH || '/';
const baseUrl = `http://127.0.0.1:${previewPort}${basePath.endsWith('/') ? basePath : `${basePath}/`}`;

const forbiddenPublicText = [
  /\?{4,}/,
  /�/,
  /forecastBasis/i,
  /releaseCadence/i,
  /accessMode/i,
  /apiUrl/i,
  /parser/i,
  /linkCheckMode/i,
  /scopeNote/i,
  /licenseNote/i,
  /crawl-report/i,
  /开发者备注/,
  /维护备注/,
  /内部备注/,
  /调试备注/,
  /not for public/i,
  /TODO:/,
  /FIXME:/,
];

const checks = [];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/usr/bin/microsoft-edge',
  ].filter(Boolean);
  return candidates.find(candidate => existsSync(candidate));
}

function spawnProcess(command, args, options = {}) {
  const child = spawn(command, args, {
    cwd: rootDir,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
    ...options,
  });
  child.stdout?.on('data', data => {
    if (process.env.JUST_DDL_QA_VERBOSE) process.stdout.write(data);
  });
  child.stderr?.on('data', data => {
    if (process.env.JUST_DDL_QA_VERBOSE) process.stderr.write(data);
  });
  return child;
}

async function waitForHttp(url, label, timeoutMs = 20000) {
  const started = Date.now();
  let lastError;
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return response;
      lastError = new Error(`${label} returned ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await sleep(300);
  }
  throw new Error(`Timed out waiting for ${label}: ${lastError?.message || 'unknown error'}`);
}

async function openCdpTarget(url) {
  const endpoint = `http://127.0.0.1:${cdpPort}/json/new?${encodeURIComponent(url)}`;
  let response = await fetch(endpoint, { method: 'PUT' });
  if (!response.ok) {
    response = await fetch(endpoint);
  }
  assert(response.ok, `Chrome DevTools target open failed: ${response.status}`);
  const target = await response.json();
  assert(target.webSocketDebuggerUrl, 'Chrome DevTools target did not expose webSocketDebuggerUrl');
  return target.webSocketDebuggerUrl;
}

function createCdpClient(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let nextId = 1;
  const pending = new Map();

  ws.addEventListener('message', event => {
    const payload = JSON.parse(event.data);
    if (!payload.id || !pending.has(payload.id)) return;
    const { resolve, reject } = pending.get(payload.id);
    pending.delete(payload.id);
    if (payload.error) reject(new Error(`${payload.error.message}: ${payload.error.data || ''}`));
    else resolve(payload.result);
  });

  const opened = new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  return {
    async send(method, params = {}) {
      await opened;
      const id = nextId++;
      const message = JSON.stringify({ id, method, params });
      const result = new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
      ws.send(message);
      return result;
    },
    close() {
      try {
        ws.close();
      } catch {
        /* ignore close failures */
      }
    },
  };
}

async function evaluate(client, expression) {
  const result = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    const text = result.exceptionDetails.exception?.description || result.exceptionDetails.text || 'Runtime evaluation failed';
    throw new Error(text);
  }
  return result.result?.value;
}

async function navigate(client, hashPath, expectedText) {
  const targetUrl = `${baseUrl}${hashPath}`;
  await client.send('Page.navigate', { url: targetUrl });
  await waitForExpression(client, `
    document.readyState === 'complete' &&
    document.body &&
    document.body.innerText.trim().length > 20
  `, `page load ${hashPath}`);
  if (expectedText) {
    await waitForExpression(client, `
      document.body.innerText.includes(${JSON.stringify(expectedText)})
    `, `text ${expectedText} on ${hashPath}`);
  }
  await sleep(350);
}

async function waitForExpression(client, expression, label, timeoutMs = 20000) {
  const started = Date.now();
  let lastValue;
  while (Date.now() - started < timeoutMs) {
    lastValue = await evaluate(client, expression);
    if (lastValue) return lastValue;
    await sleep(250);
  }
  throw new Error(`Timed out waiting for ${label}. Last value: ${JSON.stringify(lastValue)}`);
}

async function bodyText(client) {
  return evaluate(client, 'document.body.innerText');
}

function assertNoForbiddenText(text, label) {
  for (const pattern of forbiddenPublicText) {
    assert(!pattern.test(text), `${label} leaked forbidden public text matching ${pattern}`);
  }
}

async function clickButtonByText(client, label) {
  const clicked = await evaluate(client, `
    (() => {
      const label = ${JSON.stringify(label)};
      const candidates = [...document.querySelectorAll('button, [role="button"]')];
      const target = candidates.find(el => (el.textContent || '').includes(label) || el.getAttribute('title') === label);
      if (!target) return false;
      target.click();
      return true;
    })()
  `);
  assert(clicked, `Could not click button ${label}`);
  await sleep(200);
}

async function runChecks(client) {
  await navigate(client, '#/', '主题广场');
  await evaluate(client, `
    (() => {
      localStorage.setItem('just-ddl-subscriptions', JSON.stringify(['sports-ddl']));
      localStorage.setItem('just-ddl:user-events:v1', JSON.stringify([{
        id: 'qa-user-deadline-001',
        title: 'QA 自定义 DDL 回归',
        deadline: '2026-12-31T15:59:00.000Z',
        category: '个人',
        location: '本地',
        tags: ['QA', '本地'],
        description: '本地回归测试专用卡片',
        createdAt: '2026-05-26T00:00:00.000Z',
        updatedAt: '2026-05-26T00:00:00.000Z'
      }]));
      return true;
    })()
  `);

  await evaluate(client, `
    (() => {
      const input = [...document.querySelectorAll('input')].find(el => /搜索|Search/i.test(el.placeholder || el.getAttribute('aria-label') || ''));
      if (!input) return false;
      const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
      setter.call(input, '体育');
      input.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    })()
  `);
  await sleep(350);
  let text = await bodyText(client);
  assert(text.includes('体育赛事') || text.includes('sports-ddl'), 'Home search did not surface sports topic');
  assertNoForbiddenText(text, 'home search');
  checks.push('home search filters an existing old topic without public text leaks');

  await navigate(client, '#/topic/sports-ddl', '体育赛事');
  await waitForExpression(client, `document.body.innerText.includes('全部截止日')`, 'sports topic all deadlines');
  text = await bodyText(client);
  assert(text.includes('体育子专题小广场') || text.includes('羽毛球') || text.includes('乒乓球'), 'Sports subtopic plaza did not render');
  assertNoForbiddenText(text, 'sports topic');
  await clickButtonByText(client, '长卡列表');
  await waitForExpression(client, `localStorage.getItem('just-ddl-topic-event-view') === 'list'`, 'topic list mode persisted');
  await clickButtonByText(client, '多列卡片');
  await waitForExpression(client, `localStorage.getItem('just-ddl-topic-event-view') === 'grid'`, 'topic grid mode persisted');
  await clickButtonByText(client, 'Simple');
  await waitForExpression(client, `localStorage.getItem('just-ddl-topic-visual-mode') === 'simple'`, 'topic simple mode persisted');
  await clickButtonByText(client, 'Vivid');
  await waitForExpression(client, `localStorage.getItem('just-ddl-topic-visual-mode') === 'vivid'`, 'topic vivid mode persisted');
  checks.push('sports topic keeps subtopics, list/grid, and vivid/simple interactions');

  await navigate(client, '#/topic/hackathon-ddl');
  text = await bodyText(client);
  assert(text.includes('全部截止日') && (text.includes('黑客松') || text.includes('Hackathon')), 'Hackathon old topic did not render all deadlines');
  assertNoForbiddenText(text, 'hackathon topic');
  checks.push('hackathon old topic still renders after history/forecast additions');

  await navigate(client, '#/topic/jcr-impact-factor-ddl', 'JCR');
  text = await bodyText(client);
  assert(text.includes('指标') || text.includes('影响因子') || text.includes('单刊'), 'JCR metric topic did not render metric surfaces');
  assertNoForbiddenText(text, 'jcr topic');
  checks.push('journal metric topic renders public metric surfaces without internal fields');

  await navigate(client, '#/my', '我的 DDL');
  text = await bodyText(client);
  assert(text.includes('QA 自定义 DDL 回归'), 'My DDL did not include local custom card');
  assert(text.includes('个人DDL') || text.includes('个人 DDL'), 'My DDL did not include personal DDL group');
  assert(text.includes('体育赛事') || text.includes('sports-ddl'), 'My DDL did not include subscribed topic content');
  assertNoForbiddenText(text, 'my ddl');
  await clickButtonByText(client, '多列卡片');
  await waitForExpression(client, `localStorage.getItem('just-ddl-my-display-mode') === 'grid'`, 'my ddl grid mode persisted');
  await clickButtonByText(client, '长卡列表');
  await waitForExpression(client, `localStorage.getItem('just-ddl-my-display-mode') === 'list'`, 'my ddl list mode persisted');
  await clickButtonByText(client, 'Simple');
  await waitForExpression(client, `localStorage.getItem('just-ddl-my-visual-mode') === 'simple'`, 'my ddl simple mode persisted');
  await clickButtonByText(client, 'Vivid');
  await waitForExpression(client, `localStorage.getItem('just-ddl-my-visual-mode') === 'vivid'`, 'my ddl vivid mode persisted');
  checks.push('my ddl includes subscribed topics, custom cards, and display toggles');
}

async function main() {
  if (!existsSync(distIndex)) {
    throw new Error('dist/index.html is missing. Run `npm run build` before `npm run qa:ui`.');
  }

  const browser = findBrowser();
  if (!browser) {
    throw new Error('Could not find Chrome or Edge. Set CHROME_PATH to run UI regression.');
  }

  const viteBin = path.join(rootDir, 'node_modules', 'vite', 'bin', 'vite.js');
  const preview = spawnProcess(process.execPath, [
    viteBin,
    'preview',
    '--host',
    '127.0.0.1',
    '--port',
    String(previewPort),
    '--strictPort',
  ]);

  const userDataDir = mkdtempSync(path.join(tmpdir(), 'just-ddl-qa-chrome-'));
  const chrome = spawnProcess(browser, [
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${userDataDir}`,
    '--headless=new',
    '--no-first-run',
    '--disable-gpu',
    '--disable-background-networking',
    '--window-size=1440,1100',
    'about:blank',
  ], { cwd: rootDir });

  let client;
  try {
    await waitForHttp(baseUrl, 'Vite preview');
    await waitForHttp(`http://127.0.0.1:${cdpPort}/json/version`, 'Chrome DevTools');
    const wsUrl = await openCdpTarget(baseUrl);
    client = createCdpClient(wsUrl);
    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await runChecks(client);
    console.log(JSON.stringify({
      ok: true,
      baseUrl,
      checks,
    }, null, 2));
  } finally {
    client?.close();
    preview.kill();
    chrome.kill();
    await sleep(400);
    try {
      rmSync(userDataDir, { recursive: true, force: true });
    } catch {
      /* ignore temp cleanup failures */
    }
  }
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
