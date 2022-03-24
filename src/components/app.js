import React, { useEffect, useState } from 'react';
import { Header } from './header/component';
import { Restaurants } from './restaurants/component';

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
          <Restaurants />
        </div>
    </ThemeContext.Provider>
  );
}