import axios from 'axios';
import {
  FETCH_USER,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESSFUL,
  SEND_NEW_OFFER,
  SEND_NEW_OFFER_FAILED,
  FETCH_OFFERS,
  FETCH_OFFERS_SUCCESS,
  FETCH_OFFERS_FAILED,
  FETCH_USER_OFFERS,
  FETCH_USER_OFFERS_SUCCESS,
  FETCH_USER_OFFERS_FAILED,
} from './actionTypes';
import {useSelector} from "react-redux";

export const fetchUser = () => async dispatch => {
  dispatch({ type: FETCH_USER });

  try {
    const { data } = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER_SUCCESSFUL, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_USER_FAILED })
  }
};

export const sendNewOffer = (offerData) => async dispatch => {
  dispatch({ type: SEND_NEW_OFFER });
  try {
    await axios.post('/api/offer', offerData);
  } catch (err) {
    dispatch({ type: SEND_NEW_OFFER_FAILED });
  }
}

export const fetchOffers = (userOffers) => async dispatch => {
  dispatch({ type: FETCH_OFFERS });

  try {
    const { data } = await axios.get('/api/offer', { params: { userOffers }});

    dispatch({ type: FETCH_OFFERS_SUCCESS, payload: data });
   } catch (err) {
    dispatch({ type: FETCH_OFFERS_FAILED });
  }
}