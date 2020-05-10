import React from "react";
import { Route } from "react-router-dom";
import { UserOffers } from "./UserOffers";

export const userOffersPath = "/my-offers";

export const UserOffersRoute = () => {
  return (
    <Route path={userOffersPath} exact>
      <UserOffers />
    </Route>
  );
};

export default UserOffersRoute;
