import type { DDLItem } from '../ddl-data';

export const ddlForJournalVolumeDdl: DDLItem[] = [
  {
    "id": "journal-volume-openalex-snapshot",
    "topicId": "journal-volume-ddl",
    "title": "OpenAlex 期刊发文量快照",
    "type": "historyEvent",
    "date": "2026-05-24",
    "dateRange": "2026-05-24",
    "url": "https://docs.openalex.org/api-entities/sources/source-object",
    "source": "OpenAlex",
    "sourceUrl": "https://docs.openalex.org/api-entities/sources/source-object",
    "status": "ended",
    "stage": "Metadata snapshot",
    "category": "期刊评价",
    "subtopic": "openalex-volume",
    "subtopicName": "开放元数据发文量",
    "location": "Online",
    "isOnline": true,
    "tags": [
      "OpenAlex",
      "发文量",
      "开放元数据"
    ],
    "description": "使用 OpenAlex Source object 的 works_count 与 counts_by_year 字段统计代表期刊当前发文量、近年年度趋势和最新完整年同比变化。"
  }
];
