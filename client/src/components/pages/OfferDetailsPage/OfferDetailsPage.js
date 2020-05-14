import React from "react";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/pages/AppNavigation";
import { OfferDetails } from "./OfferDetails";

export const OfferDetailsPage = () => {
  return (
    <AppLayout appHeader={() => <AppHeader appNavigation={AppNavigation} />}>
      offer details page
      <OfferDetails />
    </AppLayout>
  );
};
