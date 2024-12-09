import { z } from 'zod';
import { publicProcedure, router } from '../server/trpc';

const usersRouter = router({
  userList: publicProcedure.query(async () => {
    // Retrieve users from a datasource, this is an imaginary database
    const users = [];
    //   const users: User[] = await db.user.findMany();

    return users;
  }),
  userById: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    // Retrieve the user with the given ID
    const user = undefined;
    //   const user = await db.user.findById(input);

    return user;
  }),
  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      // Create a new user in the database
      const user = undefined;
      //   const user = await db.user.create(input);

      return user;
    }),
});

export default usersRouter;
