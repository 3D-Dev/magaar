import { USER_LOGIN, USER_LOGOUT } from '../constants';

export default function user(state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
}
