import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { sendNewOffer } from "actions";
import { withRouter } from "react-router-dom";
import { newOfferFormConfig } from "./offerComponentsUtils";
import "./newOfferForm.scss";

export const NewOfferForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(sendNewOffer(data, props.history));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="new-offer-form">
      {newOfferFormConfig.map(
        ({ placeholder, name, options, errorMsg, type }) => (
          <div key={name}>
            {type === "textarea" ? (
              <textarea
                className={classNames(
                  "new-offer-form__input",
                  `new-offer-form__${name}`
                )}
                type="text"
                name={name}
                placeholder={placeholder}
                ref={register({ ...options })}
              />
            ) : (
              <input
                className={classNames(
                  "new-offer-form__input",
                  `new-offer-form__${name}`
                )}
                type="text"
                name={name}
                placeholder={placeholder}
                ref={register({ ...options })}
              />
            )}
            <span className="new-offer-form__error-msg">
              {errors[name] && errorMsg}
            </span>
          </div>
        )
      )}
      <input
        type="submit"
        className="new-offer-form__submit-btn"
        value="Wyślij"
      />
    </form>
  );
};

export default withRouter(NewOfferForm);
