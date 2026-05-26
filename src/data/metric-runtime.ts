import type { MetricSnapshot } from './metric-data';

export type { MetricSnapshot } from './metric-data';

const emptyMetrics: MetricSnapshot[] = [];

const metricLoaders = {
  "cas-partition-ddl": () => import('./metric-runtime/cas-partition-ddl').then((module) => module.metricsForCasPartitionDdl),
  "google-scholar-metrics-ddl": () => import('./metric-runtime/google-scholar-metrics-ddl').then((module) => module.metricsForGoogleScholarMetricsDdl),
  "jcr-impact-factor-ddl": () => import('./metric-runtime/jcr-impact-factor-ddl').then((module) => module.metricsForJcrImpactFactorDdl),
  "journal-volume-ddl": () => import('./metric-runtime/journal-volume-ddl').then((module) => module.metricsForJournalVolumeDdl),
  "llm-release-ddl": () => import('./metric-runtime/llm-release-ddl').then((module) => module.metricsForLlmReleaseDdl),
  "nsfc-ddl": () => import('./metric-runtime/nsfc-ddl').then((module) => module.metricsForNsfcDdl),
};

export async function loadMetricsByTopic(topicId: string): Promise<MetricSnapshot[]> {
  const loader = metricLoaders[topicId as keyof typeof metricLoaders];
  return loader ? loader() : emptyMetrics;
}
