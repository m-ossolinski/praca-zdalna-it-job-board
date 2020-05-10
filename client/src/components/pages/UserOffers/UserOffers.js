import React, {useEffect} from 'react';
import { AppHeader, AppLayout } from "../../containers/AppLayout";
import { AppNavigation } from "../AppNavigation";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserOffers} from "../../../actions";

export const UserOffers = () => {
  const dispatch = useDispatch();

  const { data: { _id }} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchUserOffers(_id));
  }, []);

  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
       usr offers
    </AppLayout>
  )
};