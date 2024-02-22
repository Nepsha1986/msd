import { z } from 'zod';
import { procedure, router } from '@/server/trpc';
import { statsRouter } from '@/server/routers/stats.router';

export const appRouter = router({
  check: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
  stats: statsRouter,
});

export type AppRouter = typeof appRouter;
