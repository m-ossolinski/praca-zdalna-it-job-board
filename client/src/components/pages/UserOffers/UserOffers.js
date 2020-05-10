import React, {useEffect} from 'react';
import { AppHeader, AppLayout } from "../../containers/AppLayout";
import { AppNavigation } from "../AppNavigation";
import {useDispatch} from "react-redux";
import {fetchOffers} from "../../../actions";

export const UserOffers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let userOffers = true;
    dispatch(fetchOffers(userOffers));
  }, []);

  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
       usr offers
    </AppLayout>
  )
};