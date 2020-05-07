import React from 'react';
import { AppHeader, AppLayout } from '../../containers/index';
import { AppNavigation } from "../AppNavigation";

export const MainPage = () => {

  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
      praca-zdalna.it - job board
    </AppLayout>
  )
}