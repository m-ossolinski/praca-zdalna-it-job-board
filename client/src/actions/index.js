import axios from 'axios';
import {
  FETCH_USER,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESSFUL,
  SEND_NEW_OFFER,
  SEND_NEW_OFFER_FAILED,
} from './actionTypes';

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
  console.log(offerData, 'offerData');
  dispatch({ type: SEND_NEW_OFFER });
  try {
    await axios.post('/api/offer', offerData);
  } catch (err) {
    dispatch({ type: SEND_NEW_OFFER_FAILED });
  }
}
