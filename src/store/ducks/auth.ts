import produce from 'immer';

export const Types = {
  SIGN_IN_REQUEST: '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_UP_REQUEST: '@auth/SIGN_UP_REQUEST',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
  SIGN_OUT: '@auth/SIGN_OUT',
};

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export const Creators = {
  signInRequest: (email: string, password: string) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { email, password },
  }),

  signInSuccess: (token: string, user: any) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, user },
  }),

  signUpRequest: (
    name: string,
    email: string,
    password: string
  ) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { name, email, password },
  }),

  signFailure: () => ({
    type: Types.SIGN_FAILURE,
  }),

  signOut: () => ({
    type: Types.SIGN_OUT,
  }),
};

export default function auth (state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case Types.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }
      case Types.SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
};
