// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Page.css';

type PropTypes = {| title: string, html: string |};

const Page = ({ title, html }: PropTypes) => (
  <div className={s.root}>
    <div className={s.container}>
      <h1>{title}</h1>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </div>
);

export default withStyles(s)(Page);
