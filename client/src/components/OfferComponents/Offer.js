import React from "react";
import { deleteOffer } from "../../actions";
import { useDispatch } from "react-redux";

export const Offer = (props) => {
  const {
    offerData: { title, description, company, requirements, _id },
    isAvailableToDeleteOffer,
  } = props;

  const dispatch = useDispatch();

  console.log(_id);

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
        <button onClick={() => dispatch(deleteOffer(_id))}>Delete</button>
      </div>
    </div>
  );
};

export default Offer;
