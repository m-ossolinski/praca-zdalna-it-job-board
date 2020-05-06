import axios from 'axios';
import { FETCH_USER, FETCH_USER_FAILED, FETCH_USER_SUCCESSFUL } from "./actionTypes";

export const fetchUser = () => async dispatch => {
  dispatch({ type: FETCH_USER });

  try {
    const { data } = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER_SUCCESSFUL, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_USER_FAILED })
  }
};
