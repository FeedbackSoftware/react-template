import React             from 'react';
import { Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Route, Switch } from 'react-router-dom';
import ConnectedRouter   from 'react-router-redux';
import PersistGate       from 'redux-persist/lib/integration/react';
import routes            from './config/routes';
import { I18n }          from 'react-i18next';

const App = ({ persistor, history }) => (
    <PersistGate
        persistor={ persistor }
    >
      <ConnectedRouter history={ history }>
        <Switch>
          { routes.map(({ path, component: Component, ...rest }, index) => {
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
      </ConnectedRouter>
    </PersistGate>
);

export default App;
