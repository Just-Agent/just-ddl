export interface MetricSnapshot {
  [key: string]: unknown;
  id: string;
  topicId?: string;
  type?: 'metricSnapshot' | string;
  journalId?: string;
  journalTitle?: string;
  issn?: string;
  metric: string;
  value: number | string;
  year?: number;
  asOfDate?: string;
  source: string;
  url: string;
  sourceUrl?: string;
}

export const metricData: Record<string, MetricSnapshot[]> = {};

export function getMetricsByTopic(topicId: string): MetricSnapshot[] {
  return metricData[topicId] || [];
}
