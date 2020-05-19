import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteOffer, fetchOfferDetails } from "actions";
import Button from "@material-ui/core/Button";
import "./offer.scss";

export const Offer = (props) => {
  const {
    offerData: { title, company, requirements, jobLocalization, _id },
    isAvailableToDeleteOffer,
    history,
  } = props;

  const dispatch = useDispatch();

  return (
    <div className="offer">
      <div className="offer-header">
        <span className="offer-header__title">{title}</span>
        <span className="offer-header__localization">{jobLocalization}</span>
      </div>
      <div className="offer-bottom">
        <span className="offer-bottom__company">{company}</span>
        <span className="offer-bottom__buttons">
          <Button
            onClick={() => dispatch(fetchOfferDetails(_id, history))}
            className="offer-bottom__buttons--details"
            variant="contained"
            color="primary"
          >
            Zobacz więcej
          </Button>
          {isAvailableToDeleteOffer && (
            <Button
              onClick={() => dispatch(deleteOffer(_id))}
              className="offer-bottom__buttons--remove"
              variant="contained"
              color="secondary"
            >
              Usuń
            </Button>
          )}
        </span>
      </div>
    </div>
  );
};

export default withRouter(Offer);

// <div
//   style={{ height: "200px", border: "1px solid purple", margin: "10px 0" }}
// >
//   <div>Stanowisko: {title}</div>
//   <span>Nazwa firmy: {company}</span>
//   <p>Opis: {description}</p>
//   <div>
//     wymagania
//     <span>{requirements}</span>

//   </div>
// </div>
