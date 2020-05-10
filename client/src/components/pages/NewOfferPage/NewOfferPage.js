import React from 'react';
import { AppHeader, AppLayout } from "../../containers/AppLayout";
import { AppNavigation } from "../AppNavigation";
import { NewOfferForm } from "../../OfferComponents";

export const NewOfferPage = () => {

  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
      new offer page
      <NewOfferForm />
    </AppLayout>
  )
};