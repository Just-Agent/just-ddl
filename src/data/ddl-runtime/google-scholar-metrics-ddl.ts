import type { DDLItem } from '../ddl-data';

export const ddlForGoogleScholarMetricsDdl: DDLItem[] = [
  {
    "topicId": "google-scholar-metrics-ddl",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "dateRange": "2026-07-01 - 2026-07-31",
    "status": "upcoming",
    "id": "google-scholar-metrics-2026-forecast-window",
    "title": "2026 Scholar Metrics 发布窗口预测",
    "type": "forecastWindow",
    "isDatePlaceholder": true,
    "lastOfficialDate": "2025-07-22",
    "basisEvents": [
      "google-scholar-metrics-2023-release",
      "google-scholar-metrics-2024-release",
      "google-scholar-metrics-2025-release"
    ],
    "estimatedNextWindow": {
      "start": "2026-07-01",
      "end": "2026-07-31"
    },
    "confidence": "medium",
    "url": "https://scholar.googleblog.com/2025/07/2025-scholar-metrics-released.html",
    "source": "Google Scholar Blog",
    "sourceUrl": "https://scholar.googleblog.com/2025/07/2025-scholar-metrics-released.html",
    "stage": "Forecast, not official date",
    "subtopic": "scholar-metrics-release",
    "subtopicName": "Scholar Metrics 年度发布",
    "tags": [
      "Google Scholar",
      "forecast",
      "h5-index"
    ],
    "description": "Google Scholar 尚未发布 2026 Scholar Metrics 官方日期；该窗口仅依据 2023-2025 官方博客历史节点估计，不作为官方倒计时。"
  },
  {
    "topicId": "google-scholar-metrics-ddl",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "dateRange": "2023-07-19",
    "status": "ended",
    "id": "google-scholar-metrics-2023-release",
    "title": "2023 Scholar Metrics 发布",
    "type": "historyEvent",
    "date": "2023-07-19",
    "url": "https://scholar.googleblog.com/2023/07/2023-scholar-metrics-released.html",
    "source": "Google Scholar Blog",
    "sourceUrl": "https://scholar.googleblog.com/2023/07/2023-scholar-metrics-released.html",
    "stage": "Scholar Metrics release",
    "subtopic": "scholar-metrics-release",
    "subtopicName": "Scholar Metrics 年度发布",
    "tags": [
      "Google Scholar",
      "h5-index",
      "2023"
    ],
    "description": "Google Scholar Blog 于 2023 年 7 月 19 日发布 2023 Scholar Metrics。",
    "coverageWindow": "2018-2022"
  },
  {
    "topicId": "google-scholar-metrics-ddl",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "dateRange": "2024-07-09",
    "status": "ended",
    "id": "google-scholar-metrics-2024-release",
    "title": "2024 Scholar Metrics 发布",
    "type": "historyEvent",
    "date": "2024-07-09",
    "url": "https://scholar.googleblog.com/2024/07/2024-scholar-metrics-released.html",
    "source": "Google Scholar Blog",
    "sourceUrl": "https://scholar.googleblog.com/2024/07/2024-scholar-metrics-released.html",
    "stage": "Scholar Metrics release",
    "subtopic": "scholar-metrics-release",
    "subtopicName": "Scholar Metrics 年度发布",
    "tags": [
      "Google Scholar",
      "h5-index",
      "2024"
    ],
    "description": "Google Scholar Blog 于 2024 年 7 月 9 日发布 2024 Scholar Metrics；该轨道适合补充会议和期刊的公开 h5 指标观察。",
    "coverageWindow": "2019-2023"
  },
  {
    "topicId": "google-scholar-metrics-ddl",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "dateRange": "2025-07-22",
    "status": "ended",
    "id": "google-scholar-metrics-2025-release",
    "title": "2025 Scholar Metrics 发布",
    "type": "historyEvent",
    "date": "2025-07-22",
    "url": "https://scholar.googleblog.com/2025/07/2025-scholar-metrics-released.html",
    "source": "Google Scholar Blog",
    "sourceUrl": "https://scholar.googleblog.com/2025/07/2025-scholar-metrics-released.html",
    "stage": "Scholar Metrics release",
    "subtopic": "scholar-metrics-release",
    "subtopicName": "Scholar Metrics 年度发布",
    "tags": [
      "Google Scholar",
      "h5-index",
      "2025"
    ],
    "description": "Google Scholar Blog 于 2025 年 7 月 22 日发布 2025 Scholar Metrics，用 h5-index 和 h5-median 展示近五完整年份的期刊与会议影响力。",
    "coverageWindow": "2020-2024"
  }
];
