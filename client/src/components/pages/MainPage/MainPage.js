import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOffers } from "actions";
import { AppHeader, AppLayout } from "components/containers";
import { AppNavigation } from "../../containers/AppNavigation";
import OffersList from "../../offerComponents/OffersList";
import "./mainPage.scss";

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return (
    <AppLayout appHeader={() => <AppHeader appNavigation={AppNavigation} />}>
      <h2>Lista ofert pracy</h2>
      <OffersList />
    </AppLayout>
  );
};
