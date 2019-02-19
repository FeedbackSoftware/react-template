import React                          from 'react';
import { Switch }                     from 'react-router-dom';
import { ConnectedRouter }            from 'connected-react-router';
import { PersistGate }                from 'redux-persist/integration/react';
import { Provider }                   from 'react-redux';
import routes, { RouteWithSubRoutes } from './config/routes';
import configureStore                 from './state/store';

export const initialState = {
  auth: {
    logged: false,
    language: '',
    user: {},
    profile: {},
    loading: false,
  },
};

const App = () => {
  const { store, persistor, history } = configureStore(initialState);

  // This is useful when state gets corrupted and persisted
  // persistor.purge();

  return (
    <Provider store={ store }>
      <PersistGate
        loading={ null }
        persistor={ persistor }
      >
        <ConnectedRouter history={ history }>
          <div>
            <Switch>
              { routes.map(
                route => <RouteWithSubRoutes key={ `${route.path}` } { ...route } />,
              ) }
            </Switch>
          </div>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
