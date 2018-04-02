import axios from 'axios';

import { getToken } from './';

const API_ROOT = 'https://conduit.productionready.io/api';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const tokenRequestWrapper = () => {
  const token = getToken();

  if(token) {
    return {
      headers: {'authorization': `Token ${token}`}
    }
  }
  return {};
}

export default {
  get: (url) => axios.get(`${API_ROOT}${url}`, tokenRequestWrapper()),
  post: (url, body) => axios.post(`${API_ROOT}${url}`, body, tokenRequestWrapper()),
  put: (url, body) => axios.put(`${API_ROOT}${url}`, body, tokenRequestWrapper()),
  delete: (url) => axios.delete(`${API_ROOT}${url}`, tokenRequestWrapper()),
};