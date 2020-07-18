// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './LoginForm.css';
import validate from './validate';

type PropTypes = {|
  handleSubmit: Function,
  submissionError: string,
|};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input {...input} type={type} className={s.input} />
    {touched && error && <div className={s.invalid}>{error}</div>}
  </div>
);

const LoginForm = ({ handleSubmit, submissionError }: PropTypes) => (
  <form onSubmit={handleSubmit}>
    <div className={s.formGroup}>
      <label className={s.label} htmlFor="email">
        Email address:
        <Field
          id="email"
          type="text"
          component={renderField}
          name="email"
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        />
        {submissionError && <div className={s.invalid}>{submissionError}</div>}
      </label>
    </div>
    <div className={s.formGroup}>
      <label className={s.label} htmlFor="password">
        Password:
        <Field
          id="password"
          type="password"
          name="password"
          component={renderField}
        />
      </label>
    </div>
    <div className={s.formGroup}>
      <button className={s.button} type="submit">
        Login
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: 'LoginForm',
  validate,
})(withStyles(s)(LoginForm));
