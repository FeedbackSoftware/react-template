import React              from 'react';
import ReactDOM           from 'react-dom';
import * as serviceWorker from './serviceWorker';

import configureStore from './state/store';
import App            from './App.js';

import './styles/index.css';

export const initialState = {
  auth: {
    logged: false,
    language: '',
    user: {},
    profile: {},
    loading: false,
  },
};

const Template = () => {
  const params = configureStore(initialState);

  return <App { ...params } />;
};

ReactDOM.render(<Template />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
