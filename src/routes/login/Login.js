// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { graphql } from 'react-apollo';
import s from './Login.css';
import LoginForm from '../../components/LoginForm';
import history from '../../history';
import { userLogin } from '../../actions/user';
import loginMutation from './login.graphql';

type PropTypes = {|
  title: string,
  mutate: Function,
  store: Object,
|};

class Login extends React.Component<PropTypes> {
  state = { error: '' };

  submit = async values => {
    const { email, password } = values;

    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { success, user, error } = response.data.databaseLoginUser;

    if (success) {
      this.props.store.dispatch(userLogin(user));
      history.push('/');
    } else {
      this.setState({ error });
    }
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <LoginForm
            onSubmit={this.submit}
            submissionError={this.state.error}
          />
        </div>
      </div>
    );
  }
}

const loginWithData = graphql(loginMutation)(Login);

export default withStyles(s)(loginWithData);
