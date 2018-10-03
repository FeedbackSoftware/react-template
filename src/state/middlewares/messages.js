import { toast } from 'react-toastify';
import { authTypes } from '../ducks/auth';
import { TOAST_CONFIGS } from '../../config/constants';

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
        config: TOAST_CONFIGS.ERROR
      }
    });
  } else if (payload.status === 'error') {
    dispatch({
      type: authTypes.MESSAGE,
      payload: {
        message: payload.message
      },
      meta: {
        config: TOAST_CONFIGS.WARNING
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
