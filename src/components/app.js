import React, { useEffect, useState } from 'react';
import { Header } from './header/component';
import { Restaurants } from './restaurants/component';
import { AuthorizationContainer } from './authtorization/container';

export const ThemeContext = React.createContext();

export function App({ restaurants }) {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    setTimeout(() => {setTheme('dark')}, 5000);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
        <div>
          <Header />
          <AuthorizationContainer />
          <Restaurants restaurants={restaurants} />
        </div>
    </ThemeContext.Provider>
  );
}