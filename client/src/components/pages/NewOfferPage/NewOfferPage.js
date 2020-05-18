import React from "react";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/containers/AppNavigation";
import NewOfferForm from "components/offerComponents/NewOfferForm";

export const NewOfferPage = () => {
  return (
    <AppLayout appHeader={() => <AppHeader appNavigation={AppNavigation} />}>
      new offer page
      <NewOfferForm />
    </AppLayout>
  );
};
