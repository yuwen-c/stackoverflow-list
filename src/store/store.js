import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
