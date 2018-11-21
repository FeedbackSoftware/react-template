import axios                      from 'axios';
import { authTypes, authActions } from '../ducks/auth';

const api = ({ dispatch, getState }) => next => (action) => {
  const types = [
    authTypes.API_CALL,
  ];

  if (!types.includes(action.type)) {
    return next(action);
  }

  const {
    config: preConfig,
    authorization = false,
    onStart = () => console.error('onStart not defined'),
    onEnd = () => console.error('onEnd not defined'),
    onComplete = response => console.log('onComplete', response),
    onError = error => console.log('onError', error),
  } = action.payload;

  const { auth: { user } } = getState();
  const config = authorization ? {
    ...preConfig,
    headers: {
      ...preConfig.headers,
      // In this case we are using a bearer-token-based authentication
      Authorization: `Bearer ${user.access_token}`,
    },
  } : preConfig;

  dispatch(onStart());
  axios(config)
    .then((response) => {
      console.log(response);
      const { status } = response;
      if (status === 401) {
        dispatch(authActions.logout());
      }
      onComplete(response);
      dispatch(onEnd(response));
    })
    .catch((error) => {
      console.log(error);
      const { response } = error;
      if (response) {
        const { status } = response;
        if (status === 401) {
          dispatch(authActions.logout());
        }
      }
      onError(error);
      dispatch(onEnd(error));
    });
};

export default [api];
