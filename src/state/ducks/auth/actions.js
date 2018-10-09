import { createAction } from 'redux-actions';
import types            from './types';
import { TOAST_CONFIG } from '../../../config/constants';

const startFetch = createAction(types.START_FETCH);
const endFetch = createAction(types.END_FETCH);
const endError = createAction(types.END_ERROR);
const updateProfile = createAction(types.UPDATE_PROFILE);
const changeLanguage = createAction(types.CHANGE_LANGUAGE);
const clear = createAction(types.CLEAR);

export const showMessage = createAction(types.MESSAGE, (message, config) => (
    {
      message
    }
), (message, config) => (
    {
      config
    }
));


const signIn = createAction(types.API_CALL, ({ data }) => (
    {
      config: {
        method: 'POST',
        url: `login/login-email`,
        data: { ...data }
      },
      authorization: false,
      onStart: startFetch,
      onComplete: (dispatch, response) => {
        if (response.data.status === 'success') {
          dispatch(showMessage('SUCCESS', TOAST_CONFIG.WARNING));
        }
      },
      onEnd: endFetch
    }
));

const setLanguage = createAction(types.API_CALL, ({ language = 'en' }) => (
    {
      config: {
        method: 'POST',
        url: `profile/set-language`,
        data: {
          language
        }
      },
      authorization: true,
      onComplete: (dispatch, response) => {
        dispatch(changeLanguage(language));
      }
    }
));

export default {
  startFetch,
  endFetch,
  endError,
  updateProfile,
  signIn,
  showMessage,
  setLanguage,
  clear
};
