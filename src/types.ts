import { z } from 'zod';
import { ConfigSchema } from './middlewares';

type EnvVars = {
  YOUTUBE_API_KEY: string;
  TELEGRAM_BOT_TOKEN: string;
};

export type Bindings = EnvVars;

type AppCofig = z.infer<typeof ConfigSchema>;

declare module 'hono' {
  interface ContextVariableMap {
    appConfig: AppCofig;
  }
}
