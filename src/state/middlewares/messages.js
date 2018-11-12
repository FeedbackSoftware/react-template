import { toast }        from 'react-toastify';
import { authTypes }    from '../ducks/auth';
import { TOAST_CONFIG } from '../../config/constants';

const endFetch = ({ dispatch }) => next => (action) => {
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
        message: payload.message,
      },
      meta: {
        config: TOAST_CONFIG.ERROR,
      },
    });
  } else if (payload.status === 'error') {
    dispatch({
      type: authTypes.MESSAGE,
      payload: {
        message: payload.message,
      },
      meta: {
        config: TOAST_CONFIG.WARNING,
      },
    });
  }
};

const messages = () => next => (action) => {
  const types = [authTypes.MESSAGE];

  if (!types.includes(action.type)) {
    return next(action);
  }

  const { message = 'THERE IS NO MESSAGE' } = action.payload;
  const { config = TOAST_CONFIG.INFO } = action.meta;
  toast(message, config);
};

export default [endFetch, messages];
