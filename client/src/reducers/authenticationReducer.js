import { FETCH_USER } from "../actions/actionTypes";

const initialState = {
  isUserAuthorized: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        isUserAuthorized: true,
        ...action.payload,
      };

    default:
      return state
  }
}