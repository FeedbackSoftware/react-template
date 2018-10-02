import {
  applyMiddleware, combineReducers, compose, createStore
}                    from 'redux';
import thunk         from 'redux-thunk';
import logger        from 'redux-logger';
import {
  routerMiddleware
}                    from 'react-router-redux';
import {
  persistReducer, persistStore
}                    from 'redux-persist';
import storage       from 'redux-persist/lib/storage';
import * as reducers from './ducks';
import {
  api, messages
}                    from './middlewares';
import STATE_VERSION from '../config/constants';

const configureStore = (history, initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      || compose;
  
  const rootPersistConfig = {
    key: 'root',
    storage,
    version: STATE_VERSION,
    migrate: (state, version) => {
      state = state && version !== state._persist.version
          ? initialState
          : state;
      return Promise.resolve(state);
    }
  };
  
  const rootReducer = combineReducers({
    ...reducers
  });
  
  const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
  
  const routerHistory = routerMiddleware(history);
  const middlewares = [thunk];
  
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  
  middlewares.push(...[routerHistory, ...api, ...messages]);
  
  const store = createStore(persistedReducer, initialState,
      composeEnhancers(applyMiddleware(...middlewares)));
  
  const persistor = persistStore(store);
  
  return {
    store,
    persistor
  };
};

export default configureStore;
