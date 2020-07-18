import merge from 'lodash.merge';

/** * Queries ** */
import {
  schema as GetAllUsers,
  queries as GetAllUsersQueries,
  resolvers as GetAllUsersResolver,
} from './users/GetAllUsers';
import {
  queries as GetLoggedInUserQueries,
  resolvers as GetLoggedInUserResolver,
} from './users/GetLoggedInUser';

/** * Mutations ** */
import {
  mutation as CreateUser,
  resolvers as CreateUserResolver,
} from './users/CreateUser';
import {
  mutation as LoginUser,
  resolvers as LoginResolver,
} from './users/AuthUser';
import {
  mutation as LogoutUser,
  resolvers as LogoutResolver,
} from './users/LogoutUser';

export const schema = [...GetAllUsers];

export const queries = [...GetAllUsersQueries, ...GetLoggedInUserQueries];

export const mutations = [...CreateUser, ...LoginUser, ...LogoutUser];

export const resolvers = merge(
  GetAllUsersResolver,
  GetLoggedInUserResolver,
  CreateUserResolver,
  LoginResolver,
  LogoutResolver,
);
