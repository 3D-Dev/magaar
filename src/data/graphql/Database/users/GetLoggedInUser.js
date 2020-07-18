import User from '../../../models/User';

export const queries = [
  `
  # Retrieves information about the currently logged-in user
  databaseGetLoggedInUser: DatabaseUser
`,
];

export const resolvers = {
  RootQuery: {
    async databaseGetLoggedInUser(parent, args, { req }) {
      // Throw error if user is not authenticated
      if (!req.user) {
        return null;
      }

      // Find logged in user from database
      const dbUser = await User.findOne({ email: req.user.email });

      return dbUser;
    },
  },
};
