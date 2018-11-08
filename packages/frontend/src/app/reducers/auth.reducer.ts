import { AuthActionTypes } from '../actions/auth.actions';

export const initialState = {};

export function auth(state = initialState, { type, data }) {
  switch (type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.SUCCESS:
    case AuthActionTypes.FAILED:
      return data;
    case AuthActionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
}
