import { createAction } from 'redux-actions';
import types            from './types';

const startFetch = createAction(types.START_FETCH);
const endFetch = createAction(types.END_FETCH);
const endError = createAction(types.END_ERROR);
const updateProfile = createAction(types.UPDATE_PROFILE);
const changeLanguage = createAction(types.CHANGE_LANGUAGE);
const clear = createAction(types.CLEAR);

const showMessage = createAction(types.MESSAGE,
  ({ message }) => ({
    message
  }),
  ({ config }) => ({
    config
  }));


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
          alert('SUCCESS');
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
