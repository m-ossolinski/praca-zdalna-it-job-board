import React from "react";
import { useSelector } from "react-redux";

export const OfferDetails = () => {
  const {
    offerDetails: { title, description, company },
    offerDetailsLoading,
  } = useSelector((state) => state.offerDetails);

  return (
    <div>
      {offerDetailsLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <span>{title}</span>
          <span>{description}</span>
          <span>{company}</span>
        </div>
      )}
      offerdetails
      <span> qweqwe</span>
    </div>
  );
};

export default OfferDetails;
