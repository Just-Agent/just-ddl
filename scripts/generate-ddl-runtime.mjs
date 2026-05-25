import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, 'src/data/ddl-data.ts');
const OUTPUT_DIR = path.join(ROOT, 'src/data/ddl-runtime');
const RUNTIME_PATH = path.join(ROOT, 'src/data/ddl-runtime.ts');

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

  for (let i = jsonStart; i < source.length; i += 1) {
    const char = source[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === '"') {
        inString = false;
      }
      continue;
    }
    if (char === '"') {
      inString = true;
    } else if (char === open) {
      depth += 1;
    } else if (char === close) {
      depth -= 1;
      if (depth === 0) return source.slice(jsonStart, i + 1);
    }
  }

  throw new Error(`Could not find JSON end for ${marker}`);
}

function toExportName(topicId) {
  return `ddlFor${topicId
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
    .join('')}`;
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${content.trimEnd()}\n`, 'utf8');
}

const source = fs.readFileSync(DATA_PATH, 'utf8');
const ddlData = JSON.parse(extractJsonAfter(source, 'export const ddlData', '{', '}'));
const topicIds = Object.keys(ddlData).sort((a, b) => a.localeCompare(b));

fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const topicId of topicIds) {
  const exportName = toExportName(topicId);
  const items = ddlData[topicId] || [];
  writeFile(
    path.join(OUTPUT_DIR, `${topicId}.ts`),
    `import type { DDLItem } from '../ddl-data';

export const ${exportName}: DDLItem[] = ${JSON.stringify(items, null, 2)};`
  );
}

const loaderEntries = topicIds.map((topicId) => {
  const exportName = toExportName(topicId);
  return `  ${JSON.stringify(topicId)}: () => import('./ddl-runtime/${topicId}').then((module) => module.${exportName}),`;
}).join('\n');

writeFile(
  RUNTIME_PATH,
  `import { topics } from './topics';
import type { DDLItem } from './ddl-data';

type DDLLoader = () => Promise<DDLItem[]>;

const loaders: Record<string, DDLLoader> = {
${loaderEntries}
};

const topicCache = new Map<string, Promise<DDLItem[]>>();
let allCache: Promise<DDLItem[]> | null = null;

function withTopicId(topicId: string, items: DDLItem[]): DDLItem[] {
  return items.map((item) => ({
    ...item,
    topicId: typeof item.topicId === 'string' && item.topicId ? item.topicId : topicId,
  }));
}

export async function loadDDLByTopic(topicId: string): Promise<DDLItem[]> {
  const loader = loaders[topicId];
  if (!loader) return [];
  const cached = topicCache.get(topicId);
  if (cached) return cached;

  const promise = loader().then((items) => withTopicId(topicId, items));
  topicCache.set(topicId, promise);
  return promise;
}

export async function loadAllDDL(): Promise<DDLItem[]> {
  if (allCache) return allCache;
  allCache = Promise.all(topics.map((topic) => loadDDLByTopic(topic.id))).then((groups) => groups.flat());
  return allCache;
}

export function knownDDLTopicIds(): string[] {
  return Object.keys(loaders);
}`
);

console.log(`generated ${topicIds.length} DDL runtime chunks`);
