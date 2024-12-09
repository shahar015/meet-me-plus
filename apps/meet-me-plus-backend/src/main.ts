/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter } from './server';

const app = express();
const port = process.env.PORT || 3333;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

app.use(
  '/',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

// created for each request
