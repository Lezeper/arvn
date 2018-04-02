import {
  REDIRECT,
  TO_REDIRECT
} from './actionTypes';

export const toRedirect = (path = '/') => {
  return { 
    type: TO_REDIRECT, 
    payload: path
  };
}

export const onRedirect = () => {
  return { type: REDIRECT };
}