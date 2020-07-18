const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(values.email)) {
    errors.email = 'Email invalid';
  }

  if (!values.password) {
    errors.password = 'Password required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must have at least 6 characters';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
};

export default validate;
