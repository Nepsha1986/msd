import { router } from '@/server/trpc';
import { statsRouter } from '@/server/routers/stats/_stats.router';

export const appRouter = router({
  stats: statsRouter,
});

export type AppRouter = typeof appRouter;
