import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const TOPICS_PATH = path.join(ROOT, 'src/data/topics.ts');
const DATA_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const METRICS_PATH = path.join(ROOT, 'src/data/metric-data.ts');
const SCAN_DIST = process.env.JUST_DDL_SCAN_DIST === '1' || process.argv.includes('--dist');
const PUBLIC_SOURCE_GLOBS = [
  'index.html',
  'src/App.tsx',
  'src/main.tsx'
];
const PUBLIC_SOURCE_DIRS = [
  'src/components',
  'src/pages'
];
const PUBLIC_DATA_DIRS = [
  'public/miniprogram'
];
const PUBLIC_TEXT_DIRS = [
  'public/contrib-topics'
];
const DIST_DIR = path.join(ROOT, 'dist');
const PRIVATE_KEYS = [
  'accessMode',
  'adapter',
  'apiUrl',
  'coverageNote',
  'crawler',
  'crawlerReport',
  'crawledAt',
  'debug',
  'debugReport',
  'deadlineTimezone',
  'developerNote',
  'developerComment',
  'developerRemark',
  'devNote',
  'devRemark',
  'debugNote',
  'debugRemark',
  'error',
  'forecastBasis',
  'internalNote',
  'internalRemark',
  'lastChecked',
  'licenseNote',
  'linkCheckMode',
  'maintainerNote',
  'maintainerComment',
  'maintainerRemark',
  'parser',
  'parserConfidence',
  'privateNote',
  'privateRemark',
  'raw',
  'rawHtml',
  'rawPayload',
  'rawSource',
  'releaseCadence',
  'sampleNote',
  'scopeNote',
  'sourcePolicy',
  'sourcePriority',
  'validationNote'
];
const PRIVATE_KEY_SET = new Set(PRIVATE_KEYS);
const PRIVATE_KEY_PATTERNS = [
  /(?:developer|dev|maintainer|internal|private|debug|crawler|crawl|parser|adapter|license|coverage|sample|scope|linkCheck|validation|review|ops|sync|raw|error)[A-Za-z0-9_]*(?:Note|Notes|Comment|Comments|Memo|Memos|Remark|Remarks|Annotation|Annotations|Report|Reports|Message|Messages)$/i,
  /^(?:raw|error|stack|trace|exception)$/i,
  /(?:开发者|开发|内部|维护者?|调试|私有|私人|爬虫|解析器|原始|错误).{0,12}(?:备注|说明|注释|留言|消息|报告)$/i
];
const FORBIDDEN_PUBLIC_TEXT = [
  /curated coverage seed/i,
  /official-style seed/i,
  /crawler seed/i,
  /coverage seed/i,
  /error\.message/i,
  /stack trace/i,
  /developer note/i,
  /developer remark/i,
  /maintainer note/i,
  /maintainer remark/i,
  /internal note/i,
  /internal remark/i,
  /private note/i,
  /private remark/i,
  /debug note/i,
  /debug remark/i,
  /not for public/i,
  /do not publish/i,
  /开发者[的把]?备注/,
  /开发者.{0,8}备注/,
  /开发备注/,
  /内部[的把]?备注/,
  /内部.{0,8}备注/,
  /维护(?:者)?[的把]?备注/,
  /维护(?:者)?.{0,8}备注/,
  /调试[的把]?备注/,
  /调试.{0,8}备注/,
  /私有[的把]?备注/,
  /私有.{0,8}备注/,
  /私人[的把]?备注/,
  /私人.{0,8}备注/,
  /\b(?:TODO|FIXME|HACK|XXX):/i
];
const DIRECT_RENDER_PATTERNS = [
  {
    pattern: /\$\{[^}]*\.(?:licenseNote|sampleNote|coverageNote|scopeNote|sourcePolicy|parser|accessMode|apiUrl|forecastBasis|releaseCadence|developerNote|developerComment|developerRemark|devNote|devRemark|debugNote|debugRemark|internalNote|internalRemark|privateNote|privateRemark|maintainerNote|maintainerComment|maintainerRemark|error\.message)[^}]*\}/,
    message: 'direct template render of developer-only field'
  },
  {
    pattern: /<(?:p|span|div|li|strong|small|em|td|th)[^>]*>\s*\{[^}]*\.(?:licenseNote|sampleNote|coverageNote|scopeNote|sourcePolicy|parser|accessMode|apiUrl|forecastBasis|releaseCadence|developerNote|developerComment|developerRemark|devNote|devRemark|debugNote|debugRemark|internalNote|internalRemark|privateNote|privateRemark|maintainerNote|maintainerComment|maintainerRemark|error\.message)[^}]*\}\s*<\/(?:p|span|div|li|strong|small|em|td|th)>/,
    message: 'direct JSX render of developer-only field'
  },
  {
    pattern: /\{[^}]*\.[A-Za-z0-9_]*(?:developer|dev|maintainer|internal|private|debug|crawler|crawl|parser|adapter|license|coverage|sample|scope|linkCheck|validation|review|ops|sync|raw|error)[A-Za-z0-9_]*(?:Note|Notes|Comment|Comments|Memo|Memos|Remark|Remarks|Annotation|Annotations|Report|Reports|Message|Messages)[^}]*\}/i,
    message: 'direct render of patterned developer-only field'
  }
];
const DIST_FORBIDDEN_PATTERNS = [
  {
    pattern: /["'](?:accessMode|adapter|apiUrl|coverageNote|crawler|crawlerReport|crawledAt|debug|debugReport|deadlineTimezone|developerNote|developerComment|developerRemark|devNote|devRemark|debugNote|debugRemark|error|forecastBasis|internalNote|internalRemark|lastChecked|licenseNote|linkCheckMode|maintainerNote|maintainerComment|maintainerRemark|parser|parserConfidence|privateNote|privateRemark|raw|rawHtml|rawPayload|rawSource|releaseCadence|sampleNote|scopeNote|sourcePolicy|sourcePriority|validationNote|[A-Za-z0-9_]*(?:developer|dev|maintainer|internal|private|debug|crawler|crawl|parser|adapter|license|coverage|sample|scope|linkCheck|validation|review|ops|sync|raw|error)[A-Za-z0-9_]*(?:Note|Notes|Comment|Comments|Memo|Memos|Remark|Remarks|Annotation|Annotations|Report|Reports|Message|Messages)|(?:开发者|开发|内部|维护者?|调试|私有|私人|爬虫|解析器|原始|错误).{0,12}(?:备注|说明|注释|留言|消息|报告))["']\s*:/,
    message: 'developer-only data key is present in built public assets'
  },
  {
    pattern: /curated coverage seed|official-style seed|crawler seed|coverage seed|error\.message|stack trace|developer note|developer remark|maintainer note|maintainer remark|internal note|internal remark|private note|private remark|debug note|debug remark|not for public|do not publish|开发者[的把]?备注|开发者.{0,8}备注|开发备注|内部[的把]?备注|内部.{0,8}备注|维护(?:者)?[的把]?备注|维护(?:者)?.{0,8}备注|调试[的把]?备注|调试.{0,8}备注|私有[的把]?备注|私有.{0,8}备注|私人[的把]?备注|私人.{0,8}备注|\b(?:TODO|FIXME|HACK|XXX):/i,
    message: 'developer-facing text is present in built public assets'
  }
];

function isPrivateKey(key) {
  return PRIVATE_KEY_SET.has(key) || PRIVATE_KEY_PATTERNS.some(pattern => pattern.test(key));
}

function extractJsonAfter(source, marker, open, close) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Missing marker: ${marker}`);
  const assignment = source.indexOf('=', start);
  if (assignment === -1) throw new Error(`Missing assignment for ${marker}`);
  const jsonStart = source.indexOf(open, assignment);
  if (jsonStart === -1) throw new Error(`Missing JSON start for ${marker}`);

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = jsonStart; index < source.length; index += 1) {
    const char = source[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === open) depth += 1;
    else if (char === close) {
      depth -= 1;
      if (depth === 0) return source.slice(jsonStart, index + 1);
    }
  }

  throw new Error(`Could not find JSON end for ${marker}`);
}

function walkFiles(dir, allowedExts = new Set(['.tsx', '.ts', '.html'])) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === 'dist') continue;
      files.push(...walkFiles(fullPath, allowedExts));
    } else if (allowedExts.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

function validatePublicData(value, label = 'ddlData') {
  const errors = [];
  if (Array.isArray(value)) {
    value.forEach((item, index) => errors.push(...validatePublicData(item, `${label}[${index}]`)));
    return errors;
  }
  if (!value || typeof value !== 'object') {
    if (typeof value === 'string') {
      for (const pattern of FORBIDDEN_PUBLIC_TEXT) {
        if (pattern.test(value)) errors.push(`${label}: contains developer-facing text "${value}"`);
      }
    }
    return errors;
  }

  for (const [key, itemValue] of Object.entries(value)) {
    if (isPrivateKey(key)) {
      errors.push(`${label}.${key}: developer-only key is present in public Hub data`);
      continue;
    }
    errors.push(...validatePublicData(itemValue, `${label}.${key}`));
  }
  return errors;
}

function validateSourceFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const errors = [];
  for (const { pattern, message } of DIRECT_RENDER_PATTERNS) {
    if (pattern.test(source)) {
      errors.push(`${filePath}: ${message}`);
    }
  }
  return errors;
}

function validateDistFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const errors = [];
  for (const { pattern, message } of DIST_FORBIDDEN_PATTERNS) {
    if (pattern.test(source)) {
      errors.push(`${filePath}: ${message}`);
    }
  }
  return errors;
}

function validatePublicTextFile(filePath) {
  const source = fs.readFileSync(filePath, 'utf8');
  const errors = [];
  for (const pattern of FORBIDDEN_PUBLIC_TEXT) {
    if (pattern.test(source)) {
      errors.push(`${filePath}: public text contains developer-facing maintenance wording: ${pattern}`);
    }
  }
  return errors;
}

function currentDistFiles() {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) return [];
  const html = fs.readFileSync(indexPath, 'utf8');
  const files = new Set([indexPath]);
  const assetPattern = /(?:src|href)=["']([^"']+)["']/g;
  let match;
  while ((match = assetPattern.exec(html))) {
    const assetPath = match[1];
    if (/^https?:\/\//.test(assetPath) || assetPath.startsWith('data:')) continue;
    const normalized = assetPath.replace(/^\.\//, '').replace(/^\//, '');
    const fullPath = path.join(DIST_DIR, normalized);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) files.add(fullPath);
  }
  for (const file of walkFiles(DIST_DIR, new Set(['.json', '.md']))) {
    files.add(file);
  }
  return [...files];
}

const errors = [];

for (const [filePath, marker, label] of [
  [TOPICS_PATH, 'export const topics', 'topics'],
  [DATA_PATH, 'export const ddlData', 'ddlData'],
  [METRICS_PATH, 'export const metricData', 'metricData']
]) {
  if (fs.existsSync(filePath)) {
    const dataSource = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(extractJsonAfter(dataSource, marker, '{', '}'));
    errors.push(...validatePublicData(data, label));
  }
}

const sourceFiles = [
  ...PUBLIC_SOURCE_GLOBS.map(file => path.join(ROOT, file)).filter(file => fs.existsSync(file)),
  ...PUBLIC_SOURCE_DIRS.flatMap(dir => walkFiles(path.join(ROOT, dir)))
];

for (const file of sourceFiles) {
  errors.push(...validateSourceFile(file));
}

const publicDataFiles = PUBLIC_DATA_DIRS.flatMap(dir => walkFiles(path.join(ROOT, dir), new Set(['.json'])));
for (const file of publicDataFiles) {
  const payload = JSON.parse(fs.readFileSync(file, 'utf8'));
  errors.push(...validatePublicData(payload, path.relative(ROOT, file)));
}

const publicTextFiles = PUBLIC_TEXT_DIRS.flatMap(dir => walkFiles(path.join(ROOT, dir), new Set(['.md', '.txt', '.html'])));
for (const file of publicTextFiles) {
  errors.push(...validatePublicTextFile(file));
}

const distFiles = SCAN_DIST ? currentDistFiles() : [];
for (const file of distFiles) {
  errors.push(...validateDistFile(file));
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`public surface validated: ${sourceFiles.length} UI files, ${publicDataFiles.length} public data files, ${publicTextFiles.length} public text files, ${distFiles.length} built files, and Hub data`);
