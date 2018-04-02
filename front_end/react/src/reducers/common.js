import {
  APP_LOAD,
  REDIRECT
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case APP_LOAD:
      return {
        ...state,
        appLoad: true  
      };
    case REDIRECT:
      return {
        ...state,
        redirect: null
      };
    default:
      return state;
  }
}