import React, { Fragment } from 'react';
import { MainPageRoute, NewOfferPageRoute, UserOffersRoute } from '../components/pages';

export const Routes = () => {
  return (
    <Fragment>
      <MainPageRoute />
      <NewOfferPageRoute />
      <UserOffersRoute />
    </Fragment>
  );
};

export default { Routes };