import {
  FETCH_OFFER_DETAILS,
  FETCH_OFFER_DETAILS_SUCCESS,
  FETCH_OFFER_DETAILS_FAILED,
} from "../actions/actionTypes";

const initialState = {
  offerDetails: {},
  offerDetailsLoading: false,
  offerDetailsLoadingFailed: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_OFFER_DETAILS:
      return {
        ...initialState,
        offerDetailsLoading: true,
      };

    case FETCH_OFFER_DETAILS_SUCCESS:
      return {
        ...initialState,
        offerDetails: action.payload,
        offerDetailsLoading: false,
      };

    case FETCH_OFFER_DETAILS_FAILED:
      return {
        ...initialState,
        offerDetailsLoadingFailed: true,
      };

    default:
      return state;
  }
}
