import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/containers/AppNavigation";
import { fetchOffers } from "actions";
import OffersList from "components/offerComponents/OffersList";

export const UserOffers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let userOffers = true;
    dispatch(fetchOffers(userOffers));
  }, []);

  return (
    <AppLayout appHeader={() => <AppHeader appNavigation={AppNavigation} />}>
      usr offers
      <OffersList isAvailableToDeleteOffer />
    </AppLayout>
  );
};
