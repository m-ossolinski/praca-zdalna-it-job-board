import React from "react";
import { deleteOffer, fetchOfferDetails } from "../../actions";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

export const Offer = (props) => {
  const {
    offerData: { title, description, company, requirements, _id },
    isAvailableToDeleteOffer,
    history,
  } = props;

  const dispatch = useDispatch();

  return (
    <div
      style={{ height: "200px", border: "1px solid purple", margin: "10px 0" }}
    >
      <div>Stanowisko: {title}</div>
      <span>Nazwa firmy: {company}</span>
      <p>Opis: {description}</p>
      <div>
        wymagania
        <span>{requirements}</span>
        {isAvailableToDeleteOffer && (
          <button onClick={() => dispatch(deleteOffer(_id))}>Delete</button>
        )}
        <button onClick={() => dispatch(fetchOfferDetails(_id, history))}>
          Detale
        </button>
      </div>
    </div>
  );
};

export default withRouter(Offer);
