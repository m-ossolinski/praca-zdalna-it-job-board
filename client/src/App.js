import React from 'react';
import { AuthUserHook } from './hooks';

export const App = () => {

  const { isUserLoggedIn } = AuthUserHook();

  return (
    <div className="App">
      praca-zdalna.it - job board

      {isUserLoggedIn ? (
        <a href="/api/logout">Logout</a>
      ): (
        <a href="/auth/google">Login with Google+</a>
      )}

    </div>
  )
}

export default App;