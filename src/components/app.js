import React, { useEffect, useState } from 'react';
import { Header } from './header/component';
import { RestaurantsConatainer } from './restaurants/container';

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
          <RestaurantsConatainer />
        </div>
    </ThemeContext.Provider>
  );
}