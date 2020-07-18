// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import logoutMutation from './logout.graphql';
import history from '../../history';

type PropTypes = {|
  mutate: Function,
  user: Object,
|};

class Header extends React.Component<PropTypes> {
  logout = async () => {
    const { data } = await this.props.mutate();

    if (data.databaseLogoutUser) {
      history.push('/logout');
    }
  };

  render() {
    const { user } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation logout={this.logout} user={user} />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>MERNG Starter</span>
          </Link>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>React</h1>
            <p className={s.bannerDesc}>Complex web apps made easy</p>
          </div>
        </div>
      </div>
    );
  }
}

const HeaderWithData = graphql(logoutMutation)(Header);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(s)(HeaderWithData));
