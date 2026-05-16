# Just-DDL 新专题贡献指南

Just-DDL 采用“一专题一仓库”的网络结构，但新专题不能直接无序开仓库。标准流程是：先在 `just-ddl` Hub 提交 Proposal，确认领域、数据源和维护方式后，再由维护者用统一模板创建或接入独立专题仓库。

## 什么时候应该开新专题

适合独立成仓库：

- 一个长期稳定的领域，例如 `robotics-ddl`、`journal-ddl`、`open-source-ddl`。
- 事件数量足够多，建议上线时至少有 10 条有效 DDL。
- 有 2 个以上可信数据源，至少 1 个应为官方源或权威聚合源。
- 数据更新节奏和已有专题不同，需要独立 crawler / Actions。
- 后续可能独立接入微信小程序、移动端或专题页。

不适合独立成仓库：

- 只是已有专题里的一个小分类，例如 NLP 里的某个 shared task。
- 只有一两条一次性事件。
- 数据源不可追踪，只有截图、微信群消息或二手转述。
- 只能靠人工维护，无法解释官方来源。

## 标准申请流程

1. 在 `just-ddl` 提交 “New Topic Proposal” Issue。
2. 维护者审核领域边界、数据源可信度和是否需要独立仓库。
3. 审核通过后，使用统一模板生成 `xxx-ddl` 仓库。
4. 专题仓库完成 crawler、validator、link-check、Pages 和 Actions。
5. 远端 Actions 通过后，加入 `just-ddl` Hub 的主题广场。

## 独立专题仓库标准

每个专题仓库必须包含：

```text
data/items.json
data/sources.json
scripts/crawl-sources.mjs
scripts/validate-data.mjs
scripts/link-check.mjs
.github/workflows/deploy-pages.yml
.github/workflows/update-data.yml
README.md
index.html
```

## 数据标准

每条 DDL 至少需要：

- `id`: 稳定、可复现，不随标题小改而频繁变化。
- `title`: 清晰的人类可读标题。
- `deadline`: ISO 时间，建议带时区；未知具体时间时用当天 `23:59:59Z`。
- `url`: 官方详情页或权威聚合页。
- `source`: 来源名称。
- `status`: `upcoming`、`open` 或 `ended`。
- `tags`: 2 到 5 个短标签。
- `description`: 简短说明，注明 deadline 的含义。

禁止把没有来源的人工整理、营销文案或截图文字直接当作生产数据。

## 数据源标准

优先级：

1. 官方页面、官方 API、官方 GitHub 仓库。
2. 权威聚合源，例如 CTFtime、itch.io Jams、GSoC 官方 timeline。
3. 学会、出版社、会议组织方、赛事主办方。
4. 社区整理源，只能作为补充，需要标注可信度。

上线前至少要说明：

- 来源 URL。
- 更新频率。
- 是否需要登录、API key 或反爬限制。
- crawler 能解析的字段。
- link-check 是否能严格通过。

## Crawler 标准

`scripts/crawl-sources.mjs` 应该：

- 针对不同 source 写明确解析器，不只做 reachability check。
- 失败时保留现有 curated 数据，不写入空数据污染仓库。
- 输出 `data/crawl-report.json`。
- 包含 `parsedItemCount`、`invalidItemCount`、`parserHealthy`、`parserDropOk`。
- 对数据量突然下降设置保护阈值。
- 明确区分 deadline 是报名截止、提交截止、活动开始还是活动结束。

## Validator 与 Link Check

`scripts/validate-data.mjs` 必须检查：

- JSON 格式。
- 必填字段。
- deadline 是否可解析。
- URL 是否存在。
- id 是否重复。

`scripts/link-check.mjs` 默认可以 warning-only；当官方详情 URL 稳定后，逐步切到严格模式。

## README 与 Pages 风格

所有专题仓库统一使用 Just-DDL Network 风格：

- README 首屏说明专题范围、数据来源、Actions 状态和 Hub 链接。
- Pages 展示倒计时、来源、状态、官方链接。
- 默认中文，英文作为手动切换或后续增强。
- 不出现 `????`、乱码标题或未翻译的占位内容。

## 接入 Hub 标准

进入 `just-ddl` 主题广场前必须满足：

- GitHub Pages 返回 200。
- `update-data.yml` 至少成功运行一次。
- `deploy-pages.yml` 成功。
- `validate-data.mjs` 通过。
- 至少一个 source-specific crawler 能产出真实数据。
- Hub 中的 `repo`、`site`、`itemCount` 与远端一致。

## 推荐命名

仓库名使用：

```text
<topic-slug>-ddl
```

例如：

- `robotics-ddl`
- `journal-ddl`
- `open-source-ddl`
- `game-dev-ddl`

专题边界不清楚时，先提交 Proposal，不要直接开仓库。
