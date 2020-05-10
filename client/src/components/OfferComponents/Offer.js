import React from "react";

export const Offer = (props) => {
  const {
    offerData: { title, description, company, requirements },
  } = props;

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
      </div>
    </div>
  );
};

export default Offer;
