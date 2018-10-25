import types            from './types';
import { initialState } from '../../../index';

const auth = (state = {}, action) => {
  switch (action.type) {
    case types.CLEAR: {
      return {
        ...state, ...initialState.auth,
      };
    }
    case types.UPDATE_PROFILE: {
      const { payload } = action;
      return {
        ...state,
        profile: {
          ...state.profile, ...(
              payload !== null ? payload : {}
          ),
        },
      };
    }
    case types.UPDATE_USER: {
      const { payload } = action;
      return {
        ...state,
        user: {
          ...state.user, ...(
              payload !== null ? payload : {}
          ),
        },
      };
    }
    case types.START_FETCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.END_FETCH: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default auth;
