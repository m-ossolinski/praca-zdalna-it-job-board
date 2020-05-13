import React from "react";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/pages/AppNavigation";
import NewOfferForm from "components/OfferComponents/NewOfferForm";

export const NewOfferPage = () => {
  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
      new offer page
      <NewOfferForm />
    </AppLayout>
  );
};
