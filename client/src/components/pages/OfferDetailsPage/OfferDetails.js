import React from "react";
import { useSelector } from "react-redux";

export const OfferDetails = () => {
  const {
    offerDetails: {
      title,
      description,
      company,
      jobLocalization,
      requirements,
      companyDescription,
      phone,
      email,
    },
    offerDetailsLoading,
    offerDetails,
  } = useSelector((state) => state.offerDetails);

  console.log(offerDetails, "offerDetails");

  return (
    <div>
      {offerDetailsLoading ? (
        <div>loading...</div>
      ) : (
        <div className="offer-details">
          <div className="offer-details__header">
            <span>
              <h2 className="offer-details__header-title">{title}</h2>
              <p>{company}</p>
            </span>
            <span className="offer-details__header-localization">
              <p>{jobLocalization}</p>us
            </span>

            <span>
              <p className="offer-details__info-title">Kontakt:</p>
              <p>{phone}</p>
              <p>{email}</p>
            </span>
          </div>
          <div className="offer-details__info">
            <span className="offer-details__info-section">
              <p className="offer-details__info-title">Opis:</p>
              <pre className="offer-details__info-description">
                {description}
              </pre>
            </span>
            <span className="offer-details__info-section">
              <p className="offer-details__info-title">Wymagania:</p>
              <pre className="offer-details__info-requirements">
                {requirements}
              </pre>
            </span>
            <span className="offer-details__info-section">
              <p className="offer-details__info-title">O firmie:</p>
              <pre className="offer-details__info-company-description">
                {companyDescription}
              </pre>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDetails;
