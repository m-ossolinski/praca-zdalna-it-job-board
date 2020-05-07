import React, {createContext} from 'react';
import { AuthUserHook } from "../hooks";

export const AuthDataContext = createContext();

export const AuthContext = (props) => {
  const authUserHookData = AuthUserHook();

  return (
    <AuthDataContext.Provider
      value={{ ...authUserHookData }}
    >
      {props.children}
    </AuthDataContext.Provider>
  )
}

export default AuthContext;