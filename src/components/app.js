import { Header } from './header/component';
import { Restaurants } from './restaurants/component';

export function App({ restaurants }) {
  return (
    <div>
      <Header effect={() => {}}/>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
