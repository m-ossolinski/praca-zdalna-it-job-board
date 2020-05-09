import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {fetchOffers} from "../../../actions";
import { AppHeader, AppLayout } from '../../containers/index';
import { AppNavigation } from "../AppNavigation";
import NewOfferForm from './NewOfferForm';
import './mainPage.scss';
import OffersList from "./OffersList";

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
  }, []);

  return (
    <AppLayout>
      <AppHeader appNavigation={AppNavigation} />
      praca-zdalna.it - job board
      <OffersList />
      <NewOfferForm />
    </AppLayout>
  )
}