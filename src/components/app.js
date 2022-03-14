import Header from './header/component';
import Restaurants from './restaurants/component';

export function App({ restaurants }) {
  return (
    <div>
      <Header />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
