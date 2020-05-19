import React, { useContext } from "react";
import { AuthDataContext } from "contexts/AuthContext";

export const LoginLogoutPanel = () => {
  const { isUserLoggedIn } = useContext(AuthDataContext);

  return (
    <div className="login-logout-panel">
      {isUserLoggedIn ? (
        <a className="login-logout-panel-btn-logout" href="/api/logout">
          Wyloguj
        </a>
      ) : (
        <a className="login-logout-panel-btn-login" href="/auth/google">
          Zaloguj
        </a>
      )}
    </div>
  );
};

export default { LoginLogoutPanel };
