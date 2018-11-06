import { createAction } from 'redux-actions';
import types            from './types';

const startFetch = createAction(types.START_FETCH);
const endFetch = createAction(types.END_FETCH);
const endError = createAction(types.END_ERROR);
const updateProfile = createAction(types.UPDATE_PROFILE);
const changeLanguage = createAction(types.CHANGE_LANGUAGE);
const clear = createAction(types.CLEAR);
const logout = createAction(types.LOGOUT);
const login = createAction(types.LOGIN);
const signIn = createAction(types.SIGN_IN);

const showMessage = createAction(types.MESSAGE,
  ({ message }) => ({
    message,
  }),
  ({ config }) => ({
    config,
  }));

export default {
  startFetch,
  endFetch,
  endError,
  updateProfile,
  signIn,
  showMessage,
  clear,
  logout,
  login,
};
