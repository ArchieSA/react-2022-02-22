import React, { useEffect, useState } from 'react';
import { Header } from './header/component';
import { RestaurantsContainer } from './restaurants/container';

export const ThemeContext = React.createContext();

export function App() {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    setTimeout(() => {setTheme('dark')}, 5000);
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
        <div>
          <Header />
          <RestaurantsContainer />
        </div>
    </ThemeContext.Provider>
  );
}
