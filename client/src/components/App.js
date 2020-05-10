import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
