import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from './MainPage';

export const mainPagePath = '/';

export const MainPageRoute = () => {
  return (
    <Route
      path={mainPagePath}
      exact
    >
      <MainPage />
    </Route>
  )
};

export default MainPageRoute;