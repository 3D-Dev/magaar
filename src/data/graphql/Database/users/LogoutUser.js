export const mutation = [
  `
  # Closes user session
  databaseLogoutUser: Boolean!
`,
];

export const resolvers = {
  Mutation: {
    async databaseLogoutUser(parent, args, context) {
      // Clear cookie `id_token`
      await context.res.clearCookie('id_token');
      return true;
    },
  },
};
