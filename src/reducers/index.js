import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import runtime from './runtime';

export default combineReducers({
  user,
  runtime,
  form: formReducer,
});
