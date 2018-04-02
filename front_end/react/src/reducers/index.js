import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import common from './common';
import post from './post';

export default combineReducers({
  auth,
  common,
  post,
  form: formReducer
});