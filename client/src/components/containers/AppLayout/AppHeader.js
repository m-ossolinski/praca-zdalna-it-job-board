import React from "react";
import { LoginLogoutPanel } from "components/containers/AppNavigation/LoginLogoutPanel";
import { Link } from "react-router-dom";
import "./appHeader.scss";

export const AppHeader = (props) => {
  const { appNavigation: AppNavigation } = props;

  return (
    <header className="app-header">
      <Link className="app-header__title" to="/">
        <h2>PracaZdalna.IT</h2>
      </Link>
      <div className="app-header-nav">
        <AppNavigation />
        <LoginLogoutPanel />
      </div>
    </header>
  );
};
