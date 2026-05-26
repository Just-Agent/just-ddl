import type { DDLItem } from '../ddl-data';

export const ddlForCasPartitionDdl: DDLItem[] = [
  {
    "topicId": "cas-partition-ddl",
    "type": "historyEvent",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "status": "ended",
    "dateRange": "2026-03-27",
    "id": "cas-partition-no-2026-official-release",
    "title": "2026 起无官方年度分区表更新窗口",
    "date": "2026-03-27",
    "url": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
    "source": "中国科学院文献情报中心",
    "sourceUrl": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
    "stage": "No official release window",
    "subtopic": "cas-policy",
    "subtopicName": "停更后状态",
    "tags": [
      "CAS",
      "无官方 DDL",
      "停更"
    ],
    "description": "由于官方已声明不再更新发布，CAS 分区专题不再生成 2026 及以后年度官方分区表倒计时；后续只追踪官方声明变化或授权历史数据导入。"
  },
  {
    "topicId": "cas-partition-ddl",
    "type": "historyEvent",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "status": "ended",
    "dateRange": "2026-03-27",
    "id": "cas-partition-platform-history-policy",
    "title": "中科院期刊分区表：平台发布与历史查询口径",
    "date": "2026-03-27",
    "url": "https://www.fenqubiao.com/User/Help.aspx",
    "source": "中科院期刊分区表在线平台帮助页",
    "sourceUrl": "https://www.fenqubiao.com/User/Help.aspx",
    "stage": "Platform boundary",
    "subtopic": "cas-access",
    "subtopicName": "历史查询",
    "tags": [
      "CAS",
      "历史轨迹",
      "查询平台"
    ],
    "description": "官方帮助页说明期刊分区表发布沿革、查询入口与平台使用边界；公开专题只记录平台与合规查询入口。",
    "canonicalUrl": "https://www.fenqubiao.com/User/Help.aspx#cas-partition-platform-history-policy"
  },
  {
    "topicId": "cas-partition-ddl",
    "type": "historyEvent",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "status": "ended",
    "dateRange": "2026-03-27",
    "id": "cas-partition-history-data-policy",
    "title": "中科院期刊分区历史数据查询与授权边界",
    "date": "2026-03-27",
    "url": "https://www.fenqubiao.com/User/DataIntroduction.aspx",
    "source": "中科院期刊分区表在线平台数据来源说明",
    "sourceUrl": "https://www.fenqubiao.com/User/DataIntroduction.aspx",
    "stage": "Access boundary",
    "subtopic": "cas-access",
    "subtopicName": "历史数据",
    "tags": [
      "CAS",
      "历史轨迹",
      "授权数据"
    ],
    "description": "数据来源说明用于解释分区表数据口径；具体期刊历年分区变化仍需通过平台查询、机构授权或合规文件导入维护。",
    "canonicalUrl": "https://www.fenqubiao.com/User/DataIntroduction.aspx#cas-partition-history-data-policy"
  },
  {
    "topicId": "cas-partition-ddl",
    "type": "historyEvent",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "status": "ended",
    "dateRange": "2026-03-27",
    "id": "cas-partition-2026-stop-update-statement",
    "title": "中科院文献情报中心声明：2026 年起不再更新发布期刊分区表",
    "date": "2026-03-27",
    "url": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
    "source": "中国科学院文献情报中心",
    "sourceUrl": "https://www.las.cas.cn/news/tzgg/202603/t20260327_8178738.html",
    "stage": "Official statement",
    "subtopic": "cas-policy",
    "subtopicName": "官方声明",
    "tags": [
      "CAS",
      "期刊分区",
      "停更"
    ],
    "description": "官方声明明确自 2026 年起不再更新与发布期刊分区表，任何其他机构发布的期刊分区表均与文献中心无关。"
  },
  {
    "topicId": "cas-partition-ddl",
    "type": "historyEvent",
    "category": "期刊评价",
    "location": "Online",
    "isOnline": true,
    "status": "ended",
    "dateRange": "2026-05-24",
    "id": "cas-partition-authorized-import-ready",
    "title": "CAS 单刊分区轨迹授权导入接口已预留",
    "date": "2026-05-24",
    "url": "https://www.fenqubiao.com/User/UseProtocol.aspx",
    "source": "中科院期刊分区表在线平台使用协议",
    "sourceUrl": "https://www.fenqubiao.com/User/UseProtocol.aspx",
    "stage": "Authorized import",
    "subtopic": "cas-import",
    "subtopicName": "授权导入",
    "tags": [
      "CAS",
      "CSV 导入",
      "单刊轨迹"
    ],
    "description": "仓库提供 CAS_HISTORY_CSV 授权导入流程，用于把单刊 ISSN、年份、大类分区、小类分区写入 metricSnapshot；导入数据须遵守平台使用协议和机构授权边界。",
    "canonicalUrl": "https://www.fenqubiao.com/User/UseProtocol.aspx#cas-partition-authorized-import-ready"
  }
];
