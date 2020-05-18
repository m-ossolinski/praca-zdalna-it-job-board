import React from "react";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/containers/AppNavigation";
import { OfferDetails } from "./OfferDetails";
import "./offerDetails.scss";

export const OfferDetailsPage = () => {
  return (
    <AppLayout appHeader={() => <AppHeader appNavigation={AppNavigation} />}>
      <OfferDetails />
    </AppLayout>
  );
};
