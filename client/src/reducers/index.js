import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import offersReducer from "./offersReducer";
import offerDetailsReducer from "./offerDetailsReducer";

export default combineReducers({
  auth: authenticationReducer,
  offers: offersReducer,
  offerDetails: offerDetailsReducer,
});
