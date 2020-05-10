import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import offersReducer from "./offersReducer";
import userOffersReducer from "./userOffersReducer";

export default combineReducers({
  auth: authenticationReducer,
  offers: offersReducer,
  userOffers: userOffersReducer,
});