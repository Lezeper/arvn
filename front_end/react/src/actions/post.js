import {
  FETCH_POSTS,
  FETCH_POST,
  DEL_POST,
  ADD_POST
} from './actionTypes';
import { http } from '../utils';

const Root = '/articles';

export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
    payload: http.get(Root)
  }
}

export const fetchPost = (slug) => {
  return {
    type: FETCH_POST,
    payload: http.get(`${Root}/${slug}`)
  }
}

export const deletePost = (slug) => {
  return {
    type: DEL_POST,
    payload: http.delete(`${Root}/${slug}`)
  }
}

export const addPost = (values) => {
  return {
    type: ADD_POST,
    payload: http.post(Root, values)
  }
}