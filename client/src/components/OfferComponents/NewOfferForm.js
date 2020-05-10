import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { sendNewOffer } from '../../actions';

const newOfferFormConfig = [{
  placeholder: 'Title',
  name: 'title',
}, {
  placeholder: 'Description',
  name: 'description',
}, {
  placeholder: 'Company',
  name: 'company',
}, {
  placeholder: 'Requirements',
  name: 'requirements',
}];

export const NewOfferForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(sendNewOffer(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="new-offer-form">
      {newOfferFormConfig.map(({ placeholder, name}) => (
        <input
          className="new-offer-form__input"
          type="text"
          name={name}
          placeholder={placeholder}
          ref={register}
        />
      ))}
      <input type="submit" className="new-offer-form__input" value="Wyślij" />
    </form>
  )
}

export default NewOfferForm;