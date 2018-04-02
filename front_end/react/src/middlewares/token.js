import { push } from 'react-router-redux';

import {
  LOGIN,
  LOGOUT,
  REGISTER,
  TO_REDIRECT,
  DEL_POST,
  ADD_POST
} from '../actions/actionTypes';
import { setToken, removeToken } from '../utils';
import { store } from '../store';
import { onRedirect } from '../actions/common';

const redirect = (url='/') => {
  if(url) {
    store.dispatch(push(url));
    store.dispatch(onRedirect());
  }
}

export default ({dispatch}) => {
  return next => action => {
    if(action.type === REGISTER || action.type === LOGIN) {
      if(!action.error) {
        setToken(action.payload.data.user.token);
        redirect();
      }
    } else if(action.type === LOGOUT) {
      removeToken();
      redirect();
    } else if(action.type === TO_REDIRECT) {
      redirect(action.payload);
    } else if(action.type === DEL_POST || action.type === ADD_POST) {
      redirect();
    }
    return next(action);
  }
}