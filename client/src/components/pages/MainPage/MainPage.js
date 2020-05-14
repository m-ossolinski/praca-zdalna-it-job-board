import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOffers } from "actions";
import { AppHeader, AppLayout } from "components/containers";
import { AppNavigation } from "../AppNavigation";
import OffersList from "../../OfferComponents/OffersList";
import "./mainPage.scss";

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return (
    <AppLayout appHeader={() => <AppHeader appNavigation={AppNavigation} />}>
      praca-zdalna.it - job board
      <OffersList />
    </AppLayout>
  );
};
