import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import AppReducer from '../_reducers/index';

export const store = createStore(AppReducer, applyMiddleware(logger, thunk));
