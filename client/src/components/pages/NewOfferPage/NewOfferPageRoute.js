import React from 'react';
import { Route } from 'react-router-dom';
import { NewOfferPage } from './NewOfferPage';

export const newOfferPagePath = '/post-a-job';

export const NewOfferPageRoute = () => {
  return (
    <Route
      path={newOfferPagePath}
      exact
    >
      <NewOfferPage />
    </Route>
  )
};

export default NewOfferPageRoute;