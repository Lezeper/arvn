import {
  LOGIN,
  LOGOUT,
  REGISTER,
  APP_LOAD
} from './actionTypes';
import { http, getToken } from '../utils';

const Root = '/users';

export const login = ({email, password}) => {
  return {
    type: LOGIN,
    payload: http.post(`${Root}/login`, { user: { email, password }}) 
  };
}

export const logout = () => {
  return { type: LOGOUT };
}

export const register = ({username, email, password}) => {
  return {
    type: REGISTER,
    payload: http.post(Root, { user: { username, email, password }})
  };
}

export const getCurrentUser = () => {
  return {
    type: APP_LOAD,
    payload: getToken() ? http.get('/user') : null
  };
}