# Just-DDL 孵化专题接口

这里是 Hub 内的少量孵化区，给第一次贡献 DDL 专题、暂时还不会独立维护仓库的开发者使用。

默认规则：

- 最多 `5` 个孵化专题。
- 每个专题最多 `50` 条 DDL。
- 只接受静态 JSON，不在 Hub 内运行贡献者自定义 crawler。
- 稳定后应迁出为独立 `xxx-ddl` 仓库，再由 Hub 注册外部数据出口。

## 已采纳示例

`civil-service-ddl/` 是 [@pengpoom](https://github.com/pengpoom) 在 PR #1 中贡献的规范化样例快照。这个专题已经拥有外部仓库
`pengpoom/civil-service-ddl` 和 GitHub Pages，并由 @pengpoom 继续维护，所以 Hub 的正式入口会接入外部
`data/items.json`；这里保留同结构 JSON，方便后来者理解“官方入口 + 待公告日期”
该如何提交。

如果你的专题还没有独立仓库，请把它写进 `registry.json`。如果已经有自己的 Pages
和 `data/items.json`，请在 Hub 的 `src/data/topics.ts` 注册外部 `repo/site/dataUrl`，
不要再放进孵化区注册表，避免同一个专题重复出现。

## 添加一个孵化专题

1. 新建目录：`public/contrib-topics/{topicId}/`，例如 `public/contrib-topics/music-ddl/`。
2. 添加 `items.json` 和 `sources.json`。
3. 在 `public/contrib-topics/registry.json` 注册专题。
4. 运行 `node scripts/validate-contrib-topics.mjs`。

`registry.json` 示例：

```json
[
  {
    "id": "music-ddl",
    "name": "音乐专题",
    "description": "音乐比赛、艺术节、作品征集与演出报名截止日。",
    "icon": "Trophy",
    "color": "#8B5CF6",
    "category": "设计创作",
    "tags": ["music", "festival", "submission"],
    "maintainer": "github-user",
    "itemsPath": "music-ddl/items.json",
    "sourcesPath": "music-ddl/sources.json",
    "status": "incubating"
  }
]
```

`items.json` 每条至少需要 `id/title/url/source`，并选择一种时间轨道：

- 正式截止日：使用 `deadline`，会进入倒计时。
- 历史节点：使用 `type: "historyEvent"` 和 `date`，只进入时间线，不进入倒计时。
- 未官宣预测：使用 `type: "forecastWindow"`、`isDatePlaceholder: true` 和 `estimatedNextWindow`，页面显示预测窗口，不显示官方倒计时。

正式截止日示例：

```json
{
  "id": "music-ddl-example-2026-06-30",
  "title": "Example Music Submission",
  "deadline": "2026-06-30T23:59:59",
  "url": "https://example.org/call",
  "source": "Official site"
}
```

预测窗口示例：

```json
{
  "id": "music-ddl-example-next-album-window",
  "title": "Example Artist 下一张专辑预测窗口",
  "type": "forecastWindow",
  "isDatePlaceholder": true,
  "estimatedNextWindow": {
    "start": "2026-09-01",
    "end": "2026-12-31"
  },
  "lastOfficialDate": "2025-11-01",
  "basisEvents": ["music-ddl-example-2025-release"],
  "confidence": "low",
  "url": "https://example.org/releases",
  "source": "Official release archive"
}
```
