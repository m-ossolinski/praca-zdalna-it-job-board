import axios from "axios";
import {
  FETCH_USER,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESSFUL,
  SEND_NEW_OFFER,
  SEND_NEW_OFFER_FAILED,
  FETCH_OFFERS,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILED,
  DELETE_OFFER,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_FAILED,
  FETCH_OFFER_DETAILS,
  FETCH_OFFER_DETAILS_SUCCESS,
  FETCH_OFFER_DETAILS_FAILED,
} from "./actionTypes";
import { offerDetailsPagePath } from "components/pages/OfferDetailsPage";

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_USER });

  try {
    const { data } = await axios.get("/api/current_user");

    dispatch({ type: FETCH_USER_SUCCESSFUL, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_USER_FAILED });
  }
};

export const sendNewOffer = (offerData, history) => async (dispatch) => {
  console.log(offerData, "offerDataofferData");
  dispatch({ type: SEND_NEW_OFFER });
  try {
    await axios.post("/api/offer", offerData);
    history.push("/");
  } catch (err) {
    dispatch({ type: SEND_NEW_OFFER_FAILED });
  }
};

export const fetchOffers = (userOffers) => async (dispatch) => {
  dispatch({ type: FETCH_OFFERS });

  try {
    const { data } = await axios.get("/api/offer", { params: { userOffers } });

    dispatch({ type: FETCH_OFFERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_OFFERS_FAILED });
  }
};

export const deleteOffer = (offerId) => async (dispatch) => {
  const userOffers = true;
  dispatch({ type: DELETE_OFFER });

  try {
    await axios.delete("/api/offer", { params: { offerId } });
    dispatch({ type: DELETE_OFFER_SUCCESS });
    dispatch(fetchOffers(userOffers));
  } catch (err) {
    dispatch({ type: DELETE_OFFER_FAILED });
  }
};

export const fetchOfferDetails = (offerId, history) => async (dispatch) => {
  dispatch({ type: FETCH_OFFER_DETAILS });
  const url = "/api/offer/:offerId";

  try {
    const response = await axios.get(url.replace(":offerId", offerId));

    dispatch({ type: FETCH_OFFER_DETAILS_SUCCESS, payload: response.data });

    history.push(offerDetailsPagePath.replace(":offerId", offerId));
  } catch (err) {
    dispatch({ type: FETCH_OFFER_DETAILS_FAILED });
  }
};
