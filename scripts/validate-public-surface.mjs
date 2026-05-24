import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const METRICS_PATH = path.join(ROOT, 'src/data/metric-data.ts');
const SCAN_DIST = process.env.JUST_DDL_SCAN_DIST === '1';
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
const DIST_DIR = path.join(ROOT, 'dist');
const PRIVATE_KEYS = [
  'accessMode',
  'adapter',
  'coverageNote',
  'crawler',
  'crawlerReport',
  'debugReport',
  'deadlineTimezone',
  'developerNote',
  'developerComment',
  'devNote',
  'debugNote',
  'forecastBasis',
  'internalNote',
  'licenseNote',
  'maintainerNote',
  'maintainerComment',
  'parser',
  'parserConfidence',
  'privateNote',
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
const FORBIDDEN_PUBLIC_TEXT = [
  /curated coverage seed/i,
  /official-style seed/i,
  /crawler seed/i,
  /coverage seed/i,
  /error\.message/i,
  /stack trace/i
];
const DIRECT_RENDER_PATTERNS = [
  {
    pattern: /\$\{[^}]*\.(?:licenseNote|sampleNote|coverageNote|scopeNote|sourcePolicy|parser|accessMode|forecastBasis|releaseCadence|developerNote|developerComment|devNote|debugNote|internalNote|privateNote|maintainerNote|maintainerComment|error\.message)[^}]*\}/,
    message: 'direct template render of developer-only field'
  },
  {
    pattern: /<(?:p|span|div|li|strong|small|em|td|th)[^>]*>\s*\{[^}]*\.(?:licenseNote|sampleNote|coverageNote|scopeNote|sourcePolicy|parser|accessMode|forecastBasis|releaseCadence|developerNote|developerComment|devNote|debugNote|internalNote|privateNote|maintainerNote|maintainerComment|error\.message)[^}]*\}\s*<\/(?:p|span|div|li|strong|small|em|td|th)>/,
    message: 'direct JSX render of developer-only field'
  }
];
const DIST_FORBIDDEN_PATTERNS = [
  {
    pattern: /["'](?:accessMode|adapter|coverageNote|crawler|crawlerReport|debugReport|deadlineTimezone|developerNote|developerComment|devNote|debugNote|forecastBasis|internalNote|licenseNote|maintainerNote|maintainerComment|parser|parserConfidence|privateNote|rawHtml|rawPayload|rawSource|releaseCadence|sampleNote|scopeNote|sourcePolicy|sourcePriority|validationNote)["']\s*:/,
    message: 'developer-only data key is present in built public assets'
  },
  {
    pattern: /curated coverage seed|official-style seed|crawler seed|coverage seed|error\.message|stack trace/i,
    message: 'developer-facing text is present in built public assets'
  }
];

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
    if (PRIVATE_KEY_SET.has(key)) {
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
  for (const file of walkFiles(DIST_DIR, new Set(['.json']))) {
    files.add(file);
  }
  return [...files];
}

const errors = [];

for (const [filePath, marker, label] of [
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

const distFiles = SCAN_DIST ? currentDistFiles() : [];
for (const file of distFiles) {
  errors.push(...validateDistFile(file));
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`public surface validated: ${sourceFiles.length} UI files, ${publicDataFiles.length} public data files, ${distFiles.length} built files, and Hub data`);
