import React from 'react';
import { Header } from './header/component';
import { RestaurantsConatainer } from '../pages/restaurants/container';
import { Basket } from '../pages/basket/component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const ThemeContext = React.createContext();

export function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact>
            <div>Home page</div>
          </Route>
          <Route path='/restaurants'>
            <RestaurantsConatainer />
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}