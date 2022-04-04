import React from 'react';
import { Header } from './header/component';
import { RestaurantsConatainer } from '../pages/restaurants/container';
import { Basket } from '../pages/basket/component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NotFound } from '../pages/not-found/component';
import { paths } from '../test-routing';

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
          <Route path={paths.restaurants.restaurantList}>
            <RestaurantsConatainer />
          </Route>
          <Route path='/basket'>
            <Basket />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}