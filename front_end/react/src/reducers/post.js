import {
  FETCH_POSTS,
  FETCH_POST
} from '../actions/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        posts: action.error ? null : action.payload.data.articles
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.error ? null : action.payload.data.article
      };
    default:
      return state;
  }
}