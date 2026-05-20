<p align="center">
  <img src="docs/assets/readme/just-ddl-logo.svg" alt="Just-DDL logo" width="180">
</p>

<h1 align="center">Just-DDL</h1>

<p align="center">
  一个面向竞赛、科研、期刊、节假日和个人规划的 <strong>联邦式多仓库 DDL 网络</strong>。
  <br>
  Hub 负责发现、订阅和同步；每个专题仓库独立维护 crawler、validator、GitHub Pages 和 Actions。
</p>

<p align="center">
  <a href="https://just-agent.github.io/just-ddl/"><img alt="GitHub Pages" src="https://img.shields.io/badge/Pages-live-0F766E?style=for-the-badge"></a>
  <a href="https://github.com/Just-Agent"><img alt="Federated Network" src="https://img.shields.io/badge/Architecture-federated%20multi--repo-111827?style=for-the-badge"></a>
  <a href="https://react.dev/"><img alt="React" src="https://img.shields.io/badge/React-19-149ECA?style=for-the-badge"></a>
  <a href="https://vite.dev/"><img alt="Vite" src="https://img.shields.io/badge/Vite-7-FBBF24?style=for-the-badge"></a>
</p>

<p align="center">
  <a href="https://just-agent.github.io/just-ddl/"><strong>打开主题广场</strong></a>
  ·
  <a href="https://github.com/Just-Agent">GitHub 组织</a>
  ·
  <a href="https://just-agent.github.io/just-ddl/#/topic/sports-ddl">体育赛事</a>
  ·
  <a href="https://just-agent.github.io/just-ddl/#/topic/game-ddl">电竞赛事</a>
  ·
  <a href="https://just-agent.github.io/just-ddl/#/topic/journal-ddl">期刊专题</a>
</p>

<p align="center">
  <img src="docs/assets/readme/federated-network.png" alt="Just-DDL 联邦式多仓库网络缩略图" width="980">
</p>

## 核心定位

Just-DDL 不是把所有截止日、所有爬虫、所有页面都塞进一个巨型仓库的 monorepo。它更像一个 **联邦式多仓库网络**：

- `just-ddl` 是 Hub：负责主题广场、我的 DDL、专题发现、订阅入口和总导航。
- 每个 `*-ddl` 是自治专题节点：自己拥有数据、README、Pages、crawler、validator、link-check 和 Actions。
- 子专题更新后用 `repository_dispatch` 主动通知 Hub 同步。
- Hub 定时兜底同步，保证某个专题临时失败也不会拖垮整个网络。

这个设计很适合 DDL 场景：黑客松、学术会议、期刊 CFP、体育赛事、电竞赛事、节假日的来源结构完全不同，拆成自治仓库后，每个专题可以按自己的节奏迭代。

## 网络规模

| 指标 | 当前值 |
| --- | ---: |
| 专题仓库 | 21 |
| GitHub Pages 专题站 | 21 |
| DDL 条目 | 534 |
| 数据入口 | `src/data/ddl-data.ts` + 各专题 `data/items.json` |
| 默认语言 | 中文 |
| 后续入口 | 微信小程序版本即将上线，敬请期待 |

## 适合谁

| 角色 | 可以用 Just-DDL 做什么 |
| --- | --- |
| 学生 / 参赛者 | 收藏黑客松、算法竞赛、电竞赛事、考试考证和奖学金申请截止日 |
| 科研人员 | 跟踪学术会议、CV/NLP/多模态挑战、期刊 Special Issue 与 CFP |
| 专题维护者 | 独立维护一个 `*-ddl` 仓库，按自己的来源、频率和 Actions 更新 |
| 产品侧 | 把 Hub 数据出口复用到 Web、微信小程序和后续 App，不重复写爬虫 |

## 联邦架构

```mermaid
flowchart TB
  Hub["just-ddl Hub<br/>主题广场 / 我的 DDL / 总入口"]

  subgraph Topics["自治专题仓库"]
    Hackathon["hackathon-ddl"]
    Journal["journal-ddl"]
    Sports["sports-ddl"]
    Game["game-ddl"]
    Holiday["holiday-ddl"]
    CV["cv-ddl"]
  end

  subgraph Pipeline["每个专题自己的数据流"]
    Crawler["source-specific crawler"]
    Validator["validator"]
    LinkCheck["link-check"]
    Pages["GitHub Pages"]
  end

  Crawler --> Validator --> LinkCheck --> Pages
  Hackathon --> Pipeline
  Journal --> Pipeline
  Sports --> Pipeline
  Game --> Pipeline
  Holiday --> Pipeline
  CV --> Pipeline

  Topics -- "repository_dispatch: topic-updated" --> Hub
  Hub -- "schedule fallback sync" --> Topics
```

## 为什么这个方式巧妙

| 问题 | 单仓库做法 | Just-DDL 联邦做法 |
| --- | --- | --- |
| 数据源差异巨大 | 一个 workflow 里塞很多爬虫，容易互相影响 | 每个专题有自己的 Actions 和失败边界 |
| 页面风格不同 | 所有专题被迫共享一种页面 | 每个专题可以有独立 Pages 和 README 风格 |
| 新专题扩展 | 改主仓库、改总 workflow、风险集中 | 新建一个专题仓库，再注册到 Hub |
| 定时更新 | 一个 schedule 越跑越复杂 | 每个专题按自己的频率更新，成功后通知 Hub |
| 小程序复用 | 数据结构混在一起 | 每个专题都能输出标准 `data/items.json` |
| 生产稳定性 | 一个专题坏了可能影响全站 | 单个节点坏了，Hub 和其他节点继续运行 |

## 专题节点

| 专题 | 仓库 | Pages | 数据流 |
| --- | --- | --- | --- |
| 黑客松 | [hackathon-ddl](https://github.com/Just-Agent/hackathon-ddl) | [访问](https://just-agent.github.io/hackathon-ddl/) | 独立 Actions |
| AI 智能体 | [agent-ddl](https://github.com/Just-Agent/agent-ddl) | [访问](https://just-agent.github.io/agent-ddl/) | 独立 Actions |
| 计算机视觉 | [cv-ddl](https://github.com/Just-Agent/cv-ddl) | [访问](https://just-agent.github.io/cv-ddl/) | 独立 Actions |
| NLP | [nlp-ddl](https://github.com/Just-Agent/nlp-ddl) | [访问](https://just-agent.github.io/nlp-ddl/) | 独立 Actions |
| 学术科研 | [academic-ddl](https://github.com/Just-Agent/academic-ddl) | [访问](https://just-agent.github.io/academic-ddl/) | 独立 Actions |
| 期刊专题 | [journal-ddl](https://github.com/Just-Agent/journal-ddl) | [访问](https://just-agent.github.io/journal-ddl/) | crawler + validator + link-check |
| 编程竞赛 | [programming-ddl](https://github.com/Just-Agent/programming-ddl) | [访问](https://just-agent.github.io/programming-ddl/) | 独立 Actions |
| 节假日 | [holiday-ddl](https://github.com/Just-Agent/holiday-ddl) | [访问](https://just-agent.github.io/holiday-ddl/) | 独立 Actions |
| 体育赛事 | [sports-ddl](https://github.com/Just-Agent/sports-ddl) | [访问](https://just-agent.github.io/sports-ddl/) | crawler + validator + link-check |
| 电竞赛事 | [game-ddl](https://github.com/Just-Agent/game-ddl) | [访问](https://just-agent.github.io/game-ddl/) | crawler + validator + link-check |

完整专题列表请在 [主题广场](https://just-agent.github.io/just-ddl/) 查看。

## 数据契约

每个专题仓库都尽量保持同一套公开数据契约：

```text
topic-ddl/
├─ data/
│  ├─ items.json          # DDL 条目
│  ├─ sources.json        # 官方/主办方/权威聚合来源
│  └─ crawl-report.json   # 最近一次 crawler 检查结果
├─ scripts/
│  ├─ crawl-sources.mjs
│  ├─ validate-data.mjs
│  └─ link-check.mjs
└─ .github/workflows/
   ├─ deploy-pages.yml
   └─ update-data.yml
```

核心字段：

| 字段 | 说明 |
| --- | --- |
| `id` | 全网唯一 DDL 条目 ID |
| `title` | 事件名称 |
| `deadline` | ISO 时间，用于倒计时 |
| `dateRange` | 用户可读日期窗口 |
| `url` / `sourceUrl` | 官方或来源页面 |
| `subtopic` / `subtopicName` | 子专题，用于折叠、Pin、分类展示 |
| `source` | 来源名 |
| `stage` | 开赛、投稿、报名、资格赛、决赛等阶段 |

## 更新机制

```mermaid
sequenceDiagram
  participant Topic as topic-ddl repository
  participant Action as GitHub Actions
  participant Hub as just-ddl Hub
  participant Pages as GitHub Pages

  Action->>Topic: crawl / validate / link-check
  Action->>Topic: commit data/*.json
  Action->>Hub: repository_dispatch(topic-updated)
  Hub->>Hub: sync-topic-data.mjs
  Hub->>Pages: build and deploy
```

`repository_dispatch` 是 GitHub 官方事件机制。它让一个专题仓库在数据更新成功后，主动提醒 Hub 立刻同步，而不是等下一个定时任务。

## 本地开发

```bash
npm install
npm run dev
```

生产发布以 GitHub Actions 和 GitHub Pages 为准。

```bash
npm run build
```

## 新专题如何加入网络

> 如果你要新增一个 DDL 专题，请先创建独立 `xxx-ddl` 仓库并发布 GitHub Pages，再向 `Just-Agent/just-ddl` 提交 PR 注册专题。Just-DDL Hub 不直接托管所有专题数据，而是接入各专题仓库的标准数据出口。

先记住一个原则：**新增专题默认走外部联邦节点**。朋友或团队先在自己的账号维护 `friend/xxx-ddl`，Hub 只接入它的 Pages / JSON；等专题长期稳定、质量可靠、确实适合作为核心专题时，再考虑转移到 `Just-Agent` 组织做官方托管。

| 你想做什么 | 应该 PR 哪个仓库 | 说明 |
| --- | --- | --- |
| 改 Hub 首页、主题广场、我的 DDL、小程序数据出口 | `Just-Agent/just-ddl` | 这是总入口和聚合层 |
| 改已有专题的数据或页面 | 对应专题仓库 | 例如 `sports-ddl`、`game-ddl`、`journal-ddl` |
| 新增完整专题 | 先建自己的 `xxx-ddl`，再 PR `Just-Agent/just-ddl` | PR 里提交注册信息，不要把大量专题数据直接塞进 Hub |
| 改微信小程序 | `Just-Agent/just-ddl-miniprogram` | 小程序是独立仓库 |

新增专题的最小接入流程：

1. 在自己的 GitHub 账号下创建公开仓库，例如 `friend/robotics-ddl`。
2. 准备 `README.md`、`data/items.json`、`data/sources.json`，并尽量补齐 `crawler`、`validator`、`link-check`。
3. 发布 GitHub Pages，确保专题页面和 JSON 数据出口可以公开访问。
4. 向 `Just-Agent/just-ddl` 提交 PR，只注册专题名、仓库地址、Pages 地址、数据出口、分类、标签和维护者说明。
5. Hub 校验通过后展示该专题；专题数据继续由原仓库维护。

### 图文教程怎么读

图片内容比较多，不需要每张都先看。多数贡献者只要看下面这张总览图，再按文字规则操作即可。

<p align="center">
  <img src="public/assets/contributor-guide/justddl-three-modes-01.png" alt="Just-DDL 三种接入模式总览" width="860">
</p>

如果还是不确定，再按问题打开对应图：

| 问题 | 该看哪张图 |
| --- | --- |
| 我只是想新增一个专题，仓库还在自己账号下 | [外部联邦节点](public/assets/contributor-guide/justddl-three-modes-02.png) |
| 要不要让 Just-Agent fork 一份 | [fork 镜像边界](public/assets/contributor-guide/justddl-three-modes-03.png) |
| 什么时候转成官方托管仓库 | [官方 transfer 节点](public/assets/contributor-guide/justddl-three-modes-04.png) |
| 完全不熟悉开源 PR 流程 | [从 Idea 到 PR 被采纳](public/assets/contributor-guide/open-source-pr-flow.jpg) |
| 想看旧版 4 步操作图 | [PR 哪个仓库](public/assets/contributor-guide/federated-pr-01.jpg) · [新建专题仓库](public/assets/contributor-guide/federated-pr-02.jpg) · [发布和提交 PR](public/assets/contributor-guide/federated-pr-03.jpg) · [合并后维护](public/assets/contributor-guide/federated-pr-04.jpg) |

## README 视觉资产

README 顶部使用两类仓库自有资产，避免依赖私有路径或外部设计稿：

```text
docs/assets/readme/just-ddl-logo.svg
docs/assets/readme/federated-network.png
public/assets/contributor-guide/justddl-three-modes-01.png
public/assets/contributor-guide/justddl-three-modes-02.png
public/assets/contributor-guide/justddl-three-modes-03.png
public/assets/contributor-guide/justddl-three-modes-04.png
```

- `just-ddl-logo.svg` 是 Just-DDL 的顶部品牌 logo：日历代表 DDL，连接节点代表多仓库联邦网络。
- `federated-network.png` 由本地 `just-thumbnail` 工作流生成：先抓取线上 Hub 的桌面、平板、手机截图，再合成为联邦网络预览图。
- `public/assets/contributor-guide/*` 是贡献者说明图文教程；README 和网站共用，但默认只展示总览图，其余作为需要时再打开的解释材料。

## License

当前仓库处于产品孵化阶段。正式开源协议会在发布稳定版本前补齐。

