/* eslint-disable no-underscore-dangle */
import {
  applyMiddleware, combineReducers, compose, createStore,
}                                          from 'redux';
import logger                              from 'redux-logger';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import {
  persistReducer, persistStore,
}                               from 'redux-persist';
import storage                  from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import * as reducers            from './ducks';
import {
  api, messages, auth,
}                               from './middlewares';
import { STATE_VERSION }        from '../config/constants';
import configurei18n            from '../i18n';

const configureStore = (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                           || compose;

  const rootPersistConfig = {
    key: 'root',
    storage,
    version: STATE_VERSION,
    migrate: (state, version) => {
      // eslint-disable-next-line no-param-reassign
      state = state && version !== state._persist.version
              ? initialState
              : state;
      return Promise.resolve(state);
    },
  };

  const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducers,
  });
  const history = createBrowserHistory();

  const persistedReducer = persistReducer(rootPersistConfig,
      rootReducer(history));
  const routerHistory = routerMiddleware(history);
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  middlewares.push(...[routerHistory, ...auth, ...api, ...messages]);

  const store = createStore(connectRouter(history)(persistedReducer),
    initialState, composeEnhancers(applyMiddleware(...middlewares)));

  const persistor = persistStore(store);

  configurei18n(store);

  return {
    store,
    persistor,
    history,
  };
};

export default configureStore;
