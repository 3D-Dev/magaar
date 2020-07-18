import React from 'react';
import Layout from '../../components/Layout';
import Register from './Register';

const title = 'Sign Up';

function action() {
  return {
    chunks: ['register'],
    title,
    component: (
      <Layout>
        <Register title={title} />
      </Layout>
    ),
  };
}

export default action;
