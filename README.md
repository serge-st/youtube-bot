```txt
pnpm i
pnpm run dev
```

```txt
pnpm deploy
```

[For generating/synchronizing types based on your Worker configuration run](https://developers.cloudflare.com/workers/wrangler/commands/#types):

```txt
pnpm cf-typegen
```

Pass the `CloudflareBindings` as generics when instantiating `Hono`:

```ts
// src/index.ts
import { type Bindings } from './types';

const app = new Hono<{ Bindings: Bindings }>();
```
