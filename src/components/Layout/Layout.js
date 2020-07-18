// @flow

import React from 'react';
import type { Node } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';

type PropTypes = {|
  children: Node,
|};

const Layout = (props: PropTypes) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default withStyles(normalizeCss, s)(Layout);
