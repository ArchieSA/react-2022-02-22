import { Header } from './header/component';
import { Restaurants } from './restaurants/component';
import PropTypes from 'prop-types';

export function App({ restaurants }) {
  return (
    <div>
      <Header />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}

App.propTypes = {
  restaurants: PropTypes.array,
};
