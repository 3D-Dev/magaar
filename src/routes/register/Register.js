// @flow

import React from 'react';
import { graphql } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Register.css';
import RegisterForm from '../../components/RegisterForm';
import history from '../../history';
import signUpMutation from './register.graphql';

type PropTypes = {|
  title: string,
  mutate: Function,
|};

class Register extends React.Component<PropTypes> {
  state = { error: '' };

  submit = async values => {
    const { email, password } = values;

    const response = await this.props.mutate({
      variables: { email, password },
    });

    const { success, user, error } = response.data.databaseCreateUser;

    if (success) {
      history.push('/login');
    } else {
      this.setState({ error });
    }
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <RegisterForm
            onSubmit={this.submit}
            submissionError={this.state.error}
          />
        </div>
      </div>
    );
  }
}

const signUpWithData = graphql(signUpMutation)(Register);

export default withStyles(s)(signUpWithData);
