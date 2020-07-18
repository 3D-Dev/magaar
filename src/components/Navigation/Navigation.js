// @flow

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Navigation.css';
import Link from '../Link';

type PropTypes = {|
  user: Object,
  logout: Function,
|};

const Navigation = ({ user, logout }: PropTypes) => (
  <div className={s.root} role="navigation">
    <Link className={s.link} to="/about">
      About
    </Link>
    <span className={s.spacer}> | </span>
    {user ? (
      <span>
        <Link className={s.link} to="/account">
          {user.email}
        </Link>
        <Link className={s.link} onClick={logout} to="/logout">
          Logout
        </Link>
      </span>
    ) : (
      <span>
        <Link className={s.link} to="/login">
          Log in
        </Link>
        <span className={s.spacer}>or</span>
        <Link className={cx(s.link, s.highlight)} to="/register">
          Register
        </Link>
      </span>
    )}
  </div>
);

export default withStyles(s)(Navigation);
