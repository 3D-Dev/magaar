import User from '../../../models/User';
import UserProfile from '../../../models/UserProfile';

export const mutation = [
  `
  # Creates a new user and profile in the local database
  databaseCreateUser(
    # The email of the new user, this email must be unique in the database
    email: String!, 
    
    # User password for creating a new local database user account
    password: String!
  ): SignUpResponse!
`,
];

export const resolvers = {
  Mutation: {
    async databaseCreateUser(parent, args) {
      // If user already exists, throw error
      const lookupUser = await User.findOne({ email: args.email });

      if (lookupUser) {
        return {
          success: false,
          error: 'User already exists!',
          user: lookupUser,
        };
      }

      // Create new user with profile in database
      const user = await User.create({ email: args.email });
      await UserProfile.create({
        password: args.password,
        user: user.id,
      });

      if (user) {
        return {
          success: true,
          error: '',
          user,
        };
      }

      return {
        success: false,
        error: 'Something went wrong',
        user: null,
      };
    },
  },
};
