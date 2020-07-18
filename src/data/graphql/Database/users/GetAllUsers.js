import User from '../../../models/User';

export const schema = [
  `
  # A user stored in the local database
  type DatabaseUser {
    _id: ID
    email: String
    emailConfirmed: String
    date: String
  }

  type DatabaseUserProfile {
    _id: ID
    displayName: String
    password: String
    picture: String
    gender: String
    location: String
    website: String
    date: String
    user: String
  }
  
  type SignUpResponse {
    success: Boolean!
    error: String
    user: DatabaseUser
  }
  
  type LoginResponse{
    success: Boolean!
    error: String
    user: DatabaseUser
  }
`,
];

export const queries = [
  `
  # Retrieves all users stored in the local database
  databaseGetAllUsers: [DatabaseUser]

  # Retrieves a single user from the local database
  databaseGetUser(
    # The user's email address
    email: String!
  ): DatabaseUser
`,
];

export const resolvers = {
  RootQuery: {
    async databaseGetAllUsers() {
      const users = await User.find();
      return users;
    },
    async databaseGetUser(parent, { email }) {
      const user = await User.findOne({ email });
      return user;
    },
  },
};
