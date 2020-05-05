import React from 'react';
import { AuthUserHook } from './hooks';

export const App = () => {

  const { isUserAuthorized } = AuthUserHook();

  return (
    <div className="App">
      praca-zdalna.it - job board

      <h2>{isUserAuthorized ? 'qwe' : 'abc'}</h2>
    </div>
  )
}

export default App;