import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../actions';

export const AuthUserHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return useSelector(state => state.auth);
}