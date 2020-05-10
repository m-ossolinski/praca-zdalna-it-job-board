import {
  FETCH_USER_OFFERS,
  FETCH_USER_OFFERS_SUCCESS,
  FETCH_USER_OFFERS_FAILED,
} from '../actions/actionTypes';

const initialState = {
  offersLoading: true,
  offersLoadingFailed: false,
  data: {},
};

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_USER_OFFERS:
      return {
        ...initialState,
        offersLoading: true,
      }

    case FETCH_USER_OFFERS_SUCCESS:
      return {
        ...initialState,
        data: [...action.payload],
        offersLoading: false,
      }

    case FETCH_USER_OFFERS_FAILED:
      return {
        ...initialState,
        offersLoadingFailed: true,
      }

    default:
      return state
  }
}