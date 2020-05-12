import React from "react";
import { useSelector } from "react-redux";
import Offer from "./Offer";

export const OffersList = (props) => {
  const { isAvailableToDeleteOffer } = props;

  const { offersLoading, offersLoadingFailed, data } = useSelector(
    (state) => state.offers
  );

  return (
    <div>
      {offersLoading ? (
        <div>Loading...</div>
      ) : (
        data &&
        data.map((offer) => (
          <Offer
            offerData={offer}
            isAvailableToDeleteOffer={isAvailableToDeleteOffer}
          />
        ))
      )}
      {offersLoadingFailed && (
        <div>Nastąpił problem podczas pobierania ofert pracy.</div>
      )}
    </div>
  );
};

export default OffersList;
