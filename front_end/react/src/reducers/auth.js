import {
  LOGIN,
  REGISTER,
  LOGOUT,
  APP_LOAD
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case LOGIN:
    case REGISTER:
      return {
        inProcess: false,
        errors: action.error ? action.payload.response.data.errors : null,
        currentUser: action.error || !action.payload ? null : action.payload.data.user
      };
    case LOGOUT:
      return {
        inProcess: false,
        errors: action.error ? action.payload.response.data.errors : null,
        currentUser: action.error ? state.currentUser : null
      };
    case APP_LOAD:
      return {
        ...state,
        currentUser: action.payload ? action.payload.data.user : null        
      };
    default:
      return state;
  }
}