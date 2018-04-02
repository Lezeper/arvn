import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import promise from 'redux-promise';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';
import tokenMiddleware from './middlewares/token';

export const history = createHistory();

const routerMiddleware_ = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(routerMiddleware_, promise, tokenMiddleware);

export const store = createStore(reducers, createStoreWithMiddleware);