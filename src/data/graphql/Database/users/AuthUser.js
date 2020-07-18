import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import UserProfile from '../../../models/UserProfile';
import config from '../../../../config';

export const mutation = [
  `
  # Authenticates a user with entered credentials
  databaseLoginUser(
    # User email
    email: String!, 
    
    # User password 
    password: String!
  ): LoginResponse!
`,
];

export const resolvers = {
  Mutation: {
    async databaseLoginUser(parent, args, context) {
      // If user already exists, throw error
      const lookupUser = await User.findOne({ email: args.email });
      const lookupUserProfile = await UserProfile.findOne({
        user: lookupUser,
      });

      if (!lookupUser || !lookupUserProfile) {
        return {
          success: false,
          error: 'No user with this email exists!',
          user: null,
        };
      }

      const validPassword = await bcrypt.compare(
        args.password,
        lookupUserProfile.password,
      );
      if (!validPassword) {
        return {
          success: false,
          error: 'Password incorrect',
          user: lookupUser,
        };
      }

      const expiresIn = 60 * 60 * 24 * 180; // 180 days
      const token = jwt.sign(
        {
          id: lookupUser.id,
          email: lookupUser.email,
          __typename: 'DatabaseUser',
        },
        config.auth.jwt.secret,
        { expiresIn },
      );
      context.res.cookie('id_token', token, {
        maxAge: 1000 * expiresIn,
        httpOnly: true,
      });

      return {
        success: true,
        error: '',
        user: lookupUser,
      };
    },
  },
};
