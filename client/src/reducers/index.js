import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import offersReducer from "./offersReducer";

export default combineReducers({
  auth: authenticationReducer,
  offers: offersReducer,
});