import React from "react";
import { AppHeader, AppLayout } from "components/containers/AppLayout";
import { AppNavigation } from "components/containers/AppNavigation";
import NewOfferForm from "components/offerComponents/NewOfferForm";

export const NewOfferPage = () => {
  return (
    <AppLayout appHeader={() => <AppHeader appNavigation={AppNavigation} />}>
      <h2 style={{ padding: 0, margin: 0 }}>
        Dodaj nową ofertę poprzez poniższy formularz
      </h2>
      <NewOfferForm />
    </AppLayout>
  );
};
