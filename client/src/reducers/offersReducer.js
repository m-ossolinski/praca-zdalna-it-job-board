import {
  FETCH_OFFERS,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILED,
} from "../actions/actionTypes";

const initialState = {
  offersLoading: true,
  offersLoadingFailed: false,
  data: {},
  deletingOffer: false,
  deletingOfferSuccess: false,
  deletingOfferFailed: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_OFFERS:
      return {
        ...initialState,
        offersLoading: true,
      };

    case FETCH_OFFERS_SUCCESS:
      return {
        ...initialState,
        data: [...action.payload],
        offersLoading: false,
      };

    case FETCH_OFFERS_FAILED:
      return {
        ...initialState,
        offersLoadingFailed: true,
      };

    default:
      return state;
  }
}
