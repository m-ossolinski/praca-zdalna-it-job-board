import React from "react";
import { LoginLogoutPanel } from "components/pages/AppNavigation/LoginLogoutPanel";
import logo from "components/utils/logo.png";
import "./appHeader.scss";

export const AppHeader = (props) => {
  const { appNavigation: AppNavigation } = props;

  return (
    <header className="app-header">
      <img src={logo} alt="app-logo" />
      <div className="app-header-nav">
        <AppNavigation />
        <LoginLogoutPanel />
      </div>
    </header>
  );
};
