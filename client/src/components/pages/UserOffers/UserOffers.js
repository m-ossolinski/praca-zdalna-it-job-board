import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/pages/AppNavigation";
import { fetchOffers } from "actions";
import OffersList from "components/OfferComponents/OffersList";

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
      <OffersList />
    </AppLayout>
  );
};
