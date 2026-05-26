import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const MINIPROGRAM_DIR = path.join(ROOT, 'public/miniprogram');
const DIST_DIR = path.join(ROOT, 'dist');

const checks = [
  {
    name: 'lint',
    command: 'npm run lint',
    scope: 'ui-quality'
  },
  {
    name: 'source-audit',
    command: 'npm run audit:sources',
    scope: 'data-quality'
  },
  {
    name: 'build',
    command: 'npm run build',
    scope: 'production-build'
  },
  {
    name: 'ui-regression',
    command: 'npm run qa:ui',
    scope: 'ui-regression'
  }
];

function runCheck(check) {
  const startedAt = Date.now();
  console.log(`\n==> ${check.name}: ${check.command}`);
  const runner = process.platform === 'win32'
    ? { command: process.env.ComSpec || 'cmd.exe', args: ['/d', '/s', '/c', check.command] }
    : { command: 'sh', args: ['-c', check.command] };
  const result = spawnSync(runner.command, runner.args, {
    cwd: ROOT,
    stdio: 'inherit',
    env: process.env
  });
  const durationMs = Date.now() - startedAt;
  if (result.status !== 0) {
    if (result.error) console.error(result.error.message);
    return {
      name: check.name,
      scope: check.scope,
      ok: false,
      durationMs,
      exitCode: result.status ?? 1
    };
  }
  return {
    name: check.name,
    scope: check.scope,
    ok: true,
    durationMs,
    exitCode: 0
  };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function countFiles(dirPath, predicate = () => true) {
  if (!fs.existsSync(dirPath)) return 0;
  let count = 0;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) count += countFiles(fullPath, predicate);
    else if (predicate(fullPath)) count += 1;
  }
  return count;
}

function collectSummary(results) {
  const manifestPath = path.join(MINIPROGRAM_DIR, 'manifest.json');
  const manifest = fs.existsSync(manifestPath) ? readJson(manifestPath) : {};
  const topicFiles = countFiles(path.join(MINIPROGRAM_DIR, 'topics'), file => file.endsWith('.json'));
  const distFiles = countFiles(DIST_DIR);

  return {
    ok: results.every(result => result.ok),
    checks: results,
    miniprogram: {
      topicsCount: manifest.topicsCount ?? null,
      itemsCount: manifest.itemsCount ?? null,
      metricsCount: manifest.metricsCount ?? null,
      dataVersion: manifest.dataVersion ?? null,
      topicFiles
    },
    dist: {
      files: distFiles,
      exists: fs.existsSync(path.join(DIST_DIR, 'index.html'))
    }
  };
}

function main() {
  const results = [];
  for (const check of checks) {
    const result = runCheck(check);
    results.push(result);
    if (!result.ok) {
      console.error(`\nRelease audit failed at ${result.name}.`);
      console.error(JSON.stringify(collectSummary(results), null, 2));
      process.exit(result.exitCode || 1);
    }
  }

  console.log('\nRelease audit summary:');
  console.log(JSON.stringify(collectSummary(results), null, 2));
}

main();
