import React from 'react';
import { LoginLogoutPanel } from '../../pages/AppNavigation/LoginLogoutPanel';
import './appHeader.scss';

export const AppHeader = (props) => {
  const { appNavigation: AppNavigation } = props;

  return (
    <header className="app-header">
      <img src="" alt="app-logo" />
      <div className="app-header-nav">
        <AppNavigation />
        <LoginLogoutPanel />
      </div>
    </header>
  )
}