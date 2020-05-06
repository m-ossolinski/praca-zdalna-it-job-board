import { FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESSFUL } from "../actions/actionTypes";

const initialState = {
  authorizationUser: false,
  authorizationUserFailed: false,
  isUserLoggedIn: false,
  data: {},
}

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_USER:
      return {
        ...initialState,
        authorizationUser: true,
      }

    case FETCH_USER_SUCCESSFUL:
      return {
        ...initialState,
        data: { ...action.payload },
        authorizationUser: false,
        isUserLoggedIn: true,
      };

    case FETCH_USER_FAILED:
      return {
        ...initialState,
        authorizationUserFailed: true,
      }

    default:
      return state
  }
}