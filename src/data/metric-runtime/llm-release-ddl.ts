import type { MetricSnapshot } from '../metric-data';

export const metricsForLlmReleaseDdl: MetricSnapshot[] = [
  {
    "sourceLabel": "公开来源",
    "id": "deepseek-v4-pro-parameter-scale",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "model_parameter_scale",
    "value": "1.6T total / 49B active",
    "asOfDate": "2026-04-24",
    "source": "DeepSeek API Docs",
    "url": "https://api-docs.deepseek.com/news/news260424"
  },
  {
    "sourceLabel": "公开来源",
    "id": "deepseek-v4-flash-parameter-scale",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "model_parameter_scale",
    "value": "284B total / 13B active",
    "asOfDate": "2026-04-24",
    "source": "DeepSeek API Docs",
    "url": "https://api-docs.deepseek.com/news/news260424"
  },
  {
    "sourceLabel": "公开来源",
    "id": "deepseek-v4-context-standard",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "context_window",
    "value": "1M standard",
    "asOfDate": "2026-04-24",
    "source": "DeepSeek API Docs",
    "url": "https://api-docs.deepseek.com/news/news260424"
  },
  {
    "sourceLabel": "公开来源",
    "id": "deepseek-v4-flash-output-price",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "api_output_price_usd_per_1m_tokens",
    "value": "$0.28",
    "asOfDate": "2026-05-24",
    "source": "DeepSeek API Docs",
    "url": "https://api-docs.deepseek.com/quick_start/pricing"
  },
  {
    "sourceLabel": "公开来源",
    "id": "deepseek-v4-pro-output-price-promo",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "api_output_price_usd_per_1m_tokens",
    "value": "$0.87 promo",
    "asOfDate": "2026-05-24",
    "source": "DeepSeek API Docs",
    "url": "https://api-docs.deepseek.com/quick_start/pricing"
  },
  {
    "sourceLabel": "公开来源",
    "id": "glm-5-parameter-scale",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "model_parameter_scale",
    "value": "744B total / 40B active",
    "asOfDate": "2026-02-12",
    "source": "Z.ai",
    "url": "https://z.ai/blog/glm-5"
  },
  {
    "sourceLabel": "公开来源",
    "id": "glm-5-pretraining-tokens",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "pretraining_tokens",
    "value": "28.5T",
    "asOfDate": "2026-02-12",
    "source": "Z.ai",
    "url": "https://z.ai/blog/glm-5"
  },
  {
    "sourceLabel": "公开来源",
    "id": "glm-5-availability",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "availability",
    "value": "API / chat / open weights",
    "asOfDate": "2026-02-12",
    "source": "Z.ai",
    "url": "https://z.ai/blog/glm-5"
  },
  {
    "sourceLabel": "公开来源",
    "id": "minimax-m2-5-positioning",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "release_positioning",
    "value": "Real-world productivity",
    "asOfDate": "2026-05-24",
    "source": "MiniMax",
    "url": "https://www.minimaxi.com/en/news/minimax-m25"
  },
  {
    "sourceLabel": "公开来源",
    "id": "qwen3-hf-model-card",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "hf_model_card",
    "value": "Qwen/Qwen3-235B-A22B",
    "asOfDate": "2026-05-25",
    "source": "Hugging Face",
    "url": "https://huggingface.co/Qwen/Qwen3-235B-A22B"
  },
  {
    "sourceLabel": "公开来源",
    "id": "qwen3-coder-hf-model-card",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "hf_model_card",
    "value": "Qwen/Qwen3-Coder-480B-A35B-Instruct",
    "asOfDate": "2026-05-25",
    "source": "Hugging Face",
    "url": "https://huggingface.co/Qwen/Qwen3-Coder-480B-A35B-Instruct"
  },
  {
    "sourceLabel": "公开来源",
    "id": "kimi-k2-hf-model-card",
    "topicId": "llm-release-ddl",
    "type": "metricSnapshot",
    "metric": "hf_model_card",
    "value": "moonshotai/Kimi-K2-Instruct",
    "asOfDate": "2026-05-25",
    "source": "Hugging Face",
    "url": "https://huggingface.co/moonshotai/Kimi-K2-Instruct"
  }
];
