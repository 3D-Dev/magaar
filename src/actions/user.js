/* eslint-disable import/prefer-default-export */

import { USER_LOGIN, USER_LOGOUT } from '../constants';

export function userLogin(user) {
  return {
    type: USER_LOGIN,
    payload: {
      ...user,
    },
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
