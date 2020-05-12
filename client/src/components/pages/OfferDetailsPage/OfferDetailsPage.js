import React from "react";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/pages/AppNavigation";

export const OfferDetailsPage = () => {
  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
      offer details page
    </AppLayout>
  );
};
