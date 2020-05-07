import React, { useContext } from 'react';
import {AuthDataContext} from "../../../contexts/AuthContext";

export const LoginLogoutPanel = () => {
  const { isUserLoggedIn } = useContext(AuthDataContext);

  return (
    <div>
      {isUserLoggedIn ? (
        <a href="/api/logout">Logout</a>
      ): (
        <a href="/auth/google">Login with Google+</a>
      )}
    </div>
  )
}

export default { LoginLogoutPanel };