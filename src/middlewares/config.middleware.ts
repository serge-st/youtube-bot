import { createMiddleware } from 'hono/factory';
import { z } from 'zod';
import { type Bindings } from '../types';

export const ConfigSchema = z.object({
  youtubeApiKey: z.string(),
  telegramBotToken: z.string().optional(),
});

export const configMiddleware = createMiddleware<{ Bindings: Bindings }>(async (c, next) => {
  const config = ConfigSchema.parse({
    youtubeApiKey: c.env.YOUTUBE_API_KEY,
    telegramBotToken: c.env.TELEGRAM_BOT_TOKEN,
  });
  c.set('appConfig', config);

  await next();
});
