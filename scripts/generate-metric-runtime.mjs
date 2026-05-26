import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const DATA_PATH = path.join(ROOT, 'src/data/metric-data.ts');
const OUTPUT_DIR = path.join(ROOT, 'src/data/metric-runtime');
const RUNTIME_PATH = path.join(ROOT, 'src/data/metric-runtime.ts');

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
  return `metricsFor${topicId
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
const metricData = JSON.parse(extractJsonAfter(source, 'export const metricData', '{', '}'));
const topicIds = Object.keys(metricData).sort((a, b) => a.localeCompare(b));

fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

for (const topicId of topicIds) {
  const exportName = toExportName(topicId);
  const metrics = metricData[topicId] || [];
  writeFile(
    path.join(OUTPUT_DIR, `${topicId}.ts`),
    `import type { MetricSnapshot } from '../metric-data';

export const ${exportName}: MetricSnapshot[] = ${JSON.stringify(metrics, null, 2)};`
  );
}

const loaderEntries = topicIds.map((topicId) => {
  const exportName = toExportName(topicId);
  return `  ${JSON.stringify(topicId)}: () => import('./metric-runtime/${topicId}').then((module) => module.${exportName}),`;
}).join('\n');

writeFile(
  RUNTIME_PATH,
  `import type { MetricSnapshot } from './metric-data';

export type { MetricSnapshot } from './metric-data';

const emptyMetrics: MetricSnapshot[] = [];

const metricLoaders = {
${loaderEntries}
};

export async function loadMetricsByTopic(topicId: string): Promise<MetricSnapshot[]> {
  const loader = metricLoaders[topicId as keyof typeof metricLoaders];
  return loader ? loader() : emptyMetrics;
}`
);

console.log(`generated ${topicIds.length} metric runtime chunks`);
