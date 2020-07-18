import React from 'react';
import Layout from '../../components/Layout';
import Login from './Login';

const title = 'Log In';

function action({ store }) {
  return {
    chunks: ['login'],
    title,
    component: (
      <Layout>
        <Login title={title} store={store} />
      </Layout>
    ),
  };
}

export default action;
