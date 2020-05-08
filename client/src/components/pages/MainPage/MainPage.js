import React from 'react';
import { AppHeader, AppLayout } from '../../containers/index';
import { AppNavigation } from "../AppNavigation";
import NewOfferForm from './NewOfferForm';
import './mainPage.scss';

export const MainPage = () => {

  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
      praca-zdalna.it - job board
      <NewOfferForm />
    </AppLayout>
  )
}