import { userLogout } from '../../actions/user';

async function action({ client, store }) {
  store.dispatch(userLogout());

  // Clear graphql store and refetch all active queries.
  // await client.resetStore();

  return {
    chunks: ['logout'],
    redirect: '/login',
  };
}

export default action;
