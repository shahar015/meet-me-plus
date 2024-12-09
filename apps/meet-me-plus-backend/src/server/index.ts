import usersRouter from '../routers/usersRouter';
import { router } from './trpc';

export const appRouter = router({
  users: usersRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
