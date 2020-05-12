import React, { Fragment } from "react";
import {
  MainPageRoute,
  NewOfferPageRoute,
  UserOffersRoute,
  OfferDetailsPageRoute,
} from "../components/pages";

export const Routes = () => {
  return (
    <Fragment>
      <MainPageRoute />
      <NewOfferPageRoute />
      <UserOffersRoute />
      <OfferDetailsPageRoute />
    </Fragment>
  );
};

export default { Routes };
