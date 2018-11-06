import { authActions, authTypes } from '../ducks/auth';

const signIn = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type !== authTypes.SIGN_IN) {
    return;
  }

  const { data } = action.payload;

  dispatch({
    type: authTypes.API_CALL,
    payload: {
      config: {
        method: 'POST',
        url: 'api/login',
        data,
      },
      authorization: false,
      onStart: authActions.startFetch,
      onComplete: (response) => {
        if (response.data.success) {
          dispatch(authActions.updateUser(response.data.data));
          dispatch(authActions.login());
        }
      },
      onEnd: authActions.endFetch,
    },
  });
};

const logout = ({ dispatch }) => next => (action) => {
  next(action);

  if (action.type !== authTypes.LOGOUT) {
    return;
  }

  dispatch(authActions.clear());
};

export default [signIn, logout];
