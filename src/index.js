import React              from 'react';
import ReactDOM           from 'react-dom';
import './styles/index.css';
import App                from './App.js';
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

const { store, persistor, history } = configureStore(initialState);


ReactDOM.render(<Provider store={ store }>
  <App
      history={ history }
      persistor={ persistor }
  />
</ Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

configurei18n(store);
