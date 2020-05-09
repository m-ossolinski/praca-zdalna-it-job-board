import {
  FETCH_OFFERS,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILED,
} from '../actions/actionTypes';

const initialState = {
  fetchingData: false,
  fetchingDataFailed: false,
  data: {},
};

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_OFFERS:
      return {
        ...initialState,
        fetchingData: true,
      }

    case FETCH_OFFERS_SUCCESS:
      return {
        ...initialState,
        data: { ...action.payload },
        fetchingData: false,
      }

    case FETCH_OFFERS_FAILED:
      return {
        ...initialState,
        fetchingDataFailed: true,
      }

    default:
      return state
  }
}