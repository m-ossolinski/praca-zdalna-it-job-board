import React from "react";
import { Route } from "react-router-dom";
import { OfferDetailsPage } from "./OfferDetailsPage";

export const offerDetailsPagePath = "/offer/details/:offerId";

export const OfferDetailsPageRoute = () => {
  return (
    <Route path={offerDetailsPagePath} exact>
      <OfferDetailsPage />
    </Route>
  );
};

export default OfferDetailsPageRoute;
