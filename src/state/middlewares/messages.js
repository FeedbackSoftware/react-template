import { authTypes } from '../ducks/auth';

import { toast } from 'react-toastify';

export const success_toast = {
  type: toast.TYPE.SUCCESS,
  autoClose: 10000,
  position: toast.POSITION.TOP_CENTER
};

export const error_toast = {
  type: toast.TYPE.ERROR,
  autoClose: 10000,
  position: toast.POSITION.TOP_CENTER
};

export const warning_toast = {
  type: toast.TYPE.WARNING,
  autoClose: 10000,
  position: toast.POSITION.TOP_CENTER
};

const endFetch = ({ dispatch }) => (next) => (action) => {
  next(action);
  
  const types = [authTypes.END_FETCH];
  
  if (!types.includes(action.type) || !action.payload) {
    return;
  }
  
  const { error, payload } = action;
  
  if (error) {
    dispatch({
      type: authTypes.MESSAGE,
      payload: {
        message: payload.message
      },
      meta: {
        config: error_toast
      }
    });
  } else if (payload.status === 'error') {
    dispatch({
      type: authTypes.MESSAGE,
      payload: {
        message: payload.message
      },
      meta: {
        config: warning_toast
      }
    });
  }
  ;
};

const messages = () => (next) => (action) => {
  const types = [authTypes.MESSAGE];
  
  if (!types.includes(action.type)) {
    return next(action);
  }
  
  const { message } = action.payload;
  const { config } = action.meta;
  
  toast(message, config);
};

export default [endFetch, messages];
