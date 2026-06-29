import { cloudflareTest } from '@cloudflare/vitest-pool-workers';
import { defineProject } from 'vitest/config';

export default defineProject({
  plugins: [
    cloudflareTest({
      miniflare: {
        compatibilityDate: '2026-06-29',
      },
    }),
  ],
});
