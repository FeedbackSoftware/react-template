import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './App';

/*
 *  Funciones Mocks(simuladas de los modulos de react-native)
 */
/*
 jest.mock('redux', () => ({
 combineReducers: jest.fn(),
 applyMiddleware: jest.fn()
 .mockImplementation((data) => data),
 requestPermissions: jest.fn(),
 getFCMToken: jest.fn(() => new Promise((accept, resolve) => accept('FakeToken'))),
 FCMEvent: {
 Notification: 'fakeNotification',
 },
 }))
 */

/*
 import configureStore from 'redux-mock-store'
 import { Provider }       from 'react-redux'


 const middlewares = []
 const mockStore = configureStore(middlewares)
 const initialState = {}
 const store = mockStore(initialState)

 const { persistor, history } = configureStore(initialState);
 */

import renderer from 'react-test-renderer';

import { Provider }   from 'react-redux';
import configureStore from './state/store';

export const initialState = {
  auth: {
    logged: false,
    language: '',
    user: {},
    profile: {},
    loading: false,
  },
};

const { store, persistor, history } = configureStore(initialState);

describe('Component', () => {
  test('renders component Home', () => {
    // const fn = jest.fn();
    /*
     const div = document.createElement('div');
     ReactDOM.render(<Provider store={ store }>
     <App
     history={ history }
     persistor={ persistor }
     />
     </ Provider>, div);
     ReactDOM.unmountComponentAtNode(div);
     */

    const tree =

        renderer.create(
            <App />,
        ).toJSON();

    expect(tree).toMatchSnapshot();

  });
});
