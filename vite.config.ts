import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'plugin-inspect-react-code'

function chunkName(id: string) {
  const normalized = id.replace(/\\/g, '/');
  if (normalized.includes('/src/data/ddl-data.ts')) return 'data-ddl';
  const ddlRuntimeMatch = normalized.match(/\/src\/data\/ddl-runtime\/([^/]+)\.ts$/);
  if (ddlRuntimeMatch) return `data-ddl-${ddlRuntimeMatch[1]}`;
  if (normalized.includes('/src/data/metric-data.ts')) return 'data-metrics';
  const metricRuntimeMatch = normalized.match(/\/src\/data\/metric-runtime\/([^/]+)\.ts$/);
  if (metricRuntimeMatch) return `data-metrics-${metricRuntimeMatch[1]}`;
  if (normalized.includes('/src/data/topics.ts')) return 'data-topics';
  if (!normalized.includes('/node_modules/')) return undefined;
  if (/[/]node_modules[/](react|react-dom|react-router|react-router-dom)[/]/.test(normalized)) {
    return 'vendor-react';
  }
  if (/[/]node_modules[/](framer-motion|gsap|lenis)[/]/.test(normalized)) {
    return 'vendor-motion';
  }
  if (/[/]node_modules[/](recharts|d3-|victory-vendor)[/]/.test(normalized)) {
    return 'vendor-charts';
  }
  if (/[/]node_modules[/](@radix-ui|lucide-react|class-variance-authority|clsx|tailwind-merge|cmdk|vaul)[/]/.test(normalized)) {
    return 'vendor-ui';
  }
  return 'vendor';
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: './',
  plugins: [command === 'serve' ? inspectAttr() : null, react()].filter(Boolean),
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: chunkName,
      },
    },
  },
}));
