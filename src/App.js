import React               from 'react';
import { Route, Switch }   from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate }     from 'redux-persist/integration/react';
import routes              from './config/routes';
import { I18n }            from 'react-i18next';
import { Provider }        from 'react-redux';

const App = ({ store, persistor, history }) => {

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
                    ({ path, component: Component, ...rest }, index) => {
                      return (
                          <Route
                              { ...rest }
                              key={ index }
                              path={ path }
                              render={ (props) => (
                                  <I18n
                                      ns="translations"
                                  >{ (t, { i18n }) => (
                                      <Component
                                          { ...props }
                                          history={ history }
                                          t={ t }
                                          i18n={ i18n }
                                      />
                                  ) }
                                  </I18n>
                              ) }
                          />
                      );
                    }) }
              </Switch>
            </div>
          </ ConnectedRouter>
        </ PersistGate>
      </ Provider>
  );
};

export default App;
