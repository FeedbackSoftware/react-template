import React              from 'react';
import ReactDOM           from 'react-dom';
import './styles/index.css';
import App                from './App';
import * as serviceWorker from './serviceWorker';
import { Provider }       from 'react-redux';
import createHistory      from 'history/createBrowserHistory';
import configureStore     from './state/store';
import configurei18n      from './i18n';

export const initialState = {
  auth: {
    logged: false,
    language: '',
    user: {},
    profile: {},
    loading: false
  }
};

const history = createHistory();
const { store, persistor } = configureStore(history, initialState);


ReactDOM.render(<Provider store={ store }>
  <App
      history={ history }
      persistor={ persistor }
  />
</Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

configurei18n(store);
