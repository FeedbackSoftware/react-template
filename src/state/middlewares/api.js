import axios                      from 'axios';
import { authTypes, authActions } from '../ducks/auth';

const api = ({ dispatch, getState }) => (next) => (action) => {
  const types = [authTypes.API_CALL];
  
  if (!types.includes(action.type)) {
    return next(action);
  }
  
  const { config: preConfig, authorization, onStart, onEnd, onComplete } = action.payload;
  const { auth: { user } } = getState();
  
  const config = authorization ? {
    ...preConfig,
    headers: {
      ...preConfig.headers,
      Authorization: `Bearer ${user.access_token}`
    }
  } : preConfig;
  
  onStart && dispatch(onStart());
  axios(config)
  .then((response) => {
    console.log(response);
    const { status } = response;
    if (status === 401) {
      dispatch(authActions.clear());
    }
    onComplete && onComplete(dispatch, response);
    onEnd && dispatch(onEnd(response));
  })
  .catch((error) => {
    console.log(error);
    const { response } = error;
    if (response) {
      const { status } = response;
      if (status === 401) {
        dispatch(authActions.clear());
      }
    }
    dispatch(authActions.endFetch(error));
    onEnd && dispatch(onEnd(error));
  });
};

export default [api];
