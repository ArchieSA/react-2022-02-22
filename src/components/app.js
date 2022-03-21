import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Header } from './header/component';
import { Restaurants } from './restaurants/component';
import { User } from './user/component';

export const ThemeContext = React.createContext();

export function App({ restaurants }) {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    setTimeout(() => {setTheme('dark')}, 5000);
  }, []);

  const { userId, userName, userGender, birthYear } = useSelector(state => state.user);
  console.log(userName);

  return (
    <ThemeContext.Provider value={theme}>
        <div>
          <Header />
          {userId && <User userName={userName} userGender={userGender} birthYear={birthYear} />}
          <Restaurants restaurants={restaurants} />
        </div>
    </ThemeContext.Provider>
  );
}