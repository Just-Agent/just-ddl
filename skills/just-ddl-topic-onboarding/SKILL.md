---
name: just-ddl-topic-onboarding
description: Use when creating, adapting, validating, or registering a Just-DDL xxx-ddl topic repository. Covers choosing sports-ddl/journal-ddl as templates, preparing data/items.json, publishing GitHub Pages, configuring Actions, and opening the Hub PR to Just-Agent/just-ddl.
---

# Just-DDL Topic Onboarding

Use this skill when a contributor wants to add a new Just-DDL topic, adapt an existing `*-ddl` repository as a template, or register an external topic repository with the Hub.

## First Decide The Contribution Mode

1. **Improve Hub**: topic plaza, navigation, Hub sync logic, mini-program exports. Work in `Just-Agent/just-ddl`.
2. **Improve Existing Topic**: data, crawler, validator, link-check, Pages UI for an existing topic. Work in that topic repository.
3. **Add New Topic**: choose the Hub incubator for beginner static JSON submissions, an independent `xxx-ddl` repository for long-term standalone topics, or a topic-family repository when several closely related Topics share one crawler/UI base.

Do not put a full new topic dataset directly into the Hub.

## Topic-Family Route

Use a topic-family repository when the new Topic is close enough to an existing repository that a separate repo would create needless operational sprawl.

Good fits:

- `game-ddl` can host both esports events and game-version countdowns.
- `exam-ddl` can host both general exams and IELTS/TOEFL countdowns.
- A future `entertainment-ddl` can host concerts, movies/TV, theatre, albums, and anime updates.

Rules:

- Do not rename existing repositories or Pages URLs.
- Each Hub Topic still gets its own `id`, `name`, color, category, tags, and item count.
- Each Topic must expose its own public JSON export, usually `data/{topicId}/items.json`.
- In `src/data/topics.ts`, set `sourceMode: 'cluster'`, `clusterId`, and `dataUrl`.
- Keep `item.id` globally unique. If `canonicalUrl` is present, it must also be globally unique across Topics.

Example Hub entry:

```ts
{
  id: 'game-version-ddl',
  name: 'Game Versions',
  repo: 'Just-Agent/game-ddl',
  site: 'https://just-agent.github.io/game-ddl/#game-version-ddl',
  sourceMode: 'cluster',
  clusterId: 'game-ddl',
  dataUrl: 'data/game-version-ddl/items.json',
  status: 'published',
  itemCount: 0,
  category: '电竞赛事',
  tags: ['game update', 'patch', 'version']
}
```

## Beginner Route: Hub Incubator

Use the incubator only when the contributor is not ready to maintain a separate repository.

Limits:

- At most 5 incubator topics.
- At most 50 DDL items per incubator topic.
- Static JSON only; do not add contributor crawlers to the Hub.
- Mature topics should migrate to independent `xxx-ddl` repositories.

Required shape:

```text
public/contrib-topics/
├── registry.json
├── README.md
└── {topicId}/
    ├── items.json
    └── sources.json
```

Before accepting an incubator PR, run:

```bash
node scripts/validate-contrib-topics.mjs
```

Use `registry.json` to register only incubating topics. Do not register a topic here if it already has an independent repository.

## New Topic Workflow

Use this workflow for the standard independent-repository route.

1. Collect topic facts:
   - `topicId`: lowercase kebab case ending with `-ddl`, such as `music-ddl`.
   - `owner/repo`: contributor-owned public repository, such as `friend/music-ddl`.
   - Pages URL: usually `https://friend.github.io/music-ddl/`.
   - category, tags, icon, color, maintainer, update cadence, and source notes.

2. Choose a template:
   - Use `sports-ddl` for event-heavy topics with subtopics, thumbnails, list/grid views, and Vivid/Simple cards.
   - Use `journal-ddl` for CFP or text-heavy topics with many simple records.
   - Use the closest existing `*-ddl` repository when the domain is similar.

3. Required topic repository shape:

```text
xxx-ddl/
├─ README.md
├─ index.html
├─ data/
│  ├─ items.json
│  ├─ sources.json
│  └─ crawl-report.json
├─ scripts/
│  ├─ crawl-sources.mjs
│  ├─ validate-data.mjs
│  └─ link-check.mjs
└─ .github/workflows/
   ├─ deploy-pages.yml
   └─ update-data.yml
```

`data/items.json` must be public on the `main` branch. The Hub reads:

```text
https://raw.githubusercontent.com/owner/xxx-ddl/main/data/items.json
```

4. Required item fields:

```json
{
  "id": "music-ddl-example-2026-06-30",
  "title": "Example Music Submission",
  "deadline": "2026-06-30T23:59:59",
  "url": "https://example.org/call",
  "source": "Official site"
}
```

Recommended fields: `dateRange`, `location`, `isOnline`, `tags`, `status`, `stage`, `type`, `description`, `subtopic`, `previewImage`, `sourceUrl`, `prize`.

5. Data rules:
   - Prefer official organizers or authoritative aggregators.
   - Every `url` must be publicly accessible.
   - Use UTF-8 only; reject mojibake such as `????` or replacement characters.
   - Keep IDs stable and globally unique.
   - Use ISO-compatible `deadline` values so countdowns work.
   - Do not expose internal maintenance text in public data. Fields or text for developer notes, maintainer notes, parser/crawler details, raw errors, private authorization notes, `forecastBasis`, or `releaseCadence` must be stripped or rewritten into user-facing copy before Hub registration.

6. Validate before Hub PR:
   - Run the topic repository's validator and link-check when present.
   - Open the Pages URL and raw JSON URL anonymously.
   - Confirm README explains sources, update cadence, maintainer, and error reporting.

7. Register in Hub:
   - Add one entry to `src/data/topics.ts`.
   - Keep topic data in the topic repository; do not paste all items into the Hub.
   - `repo` may be external, such as `friend/music-ddl`.
   - `site` should be the contributor's Pages URL.
   - For a topic-family repository, add `sourceMode: 'cluster'`, `clusterId`, and `dataUrl`; otherwise the Hub reads the default `data/items.json`.

Example Hub topic entry:

```ts
{
  id: 'music-ddl',
  name: 'Music',
  description: '音乐比赛、艺术节、征集与演出报名截止日',
  icon: 'Trophy',
  color: '#8B5CF6',
  repo: 'friend/music-ddl',
  site: 'https://friend.github.io/music-ddl/',
  status: 'published',
  itemCount: 0,
  category: '设计创作',
  tags: ['music', 'festival', 'submission']
}
```

8. PR checklist:
   - Pages URL
   - raw `data/items.json` URL
   - source list and update cadence
   - validator/link-check status
   - maintainer contact

## Repository Dispatch

If the topic repository has permission to notify the Hub after updates, use GitHub's official `repository_dispatch` event with event type `topic-updated` and payload including `topic_id` and `source_repo`. If not configured, the Hub scheduled sync still acts as fallback.

## Avoid

- Do not ask the Hub to execute external repository scripts.
- Do not depend on private or login-only sources as default data.
- Do not use a fork as a permanent official topic without explicit ownership transfer.
- Do not hide crawler failures; write a readable `crawl-report.json`.
- Do not render internal notes on Pages, README, Hub pages, or mini-program JSON; Hub public-surface validation should fail if such fields or phrases appear.
