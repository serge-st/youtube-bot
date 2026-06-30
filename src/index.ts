import { Hono } from 'hono';
import { type Bindings } from './types';
import { configMiddleware } from './middlewares';

const app = new Hono<{ Bindings: Bindings }>().use(configMiddleware);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;
