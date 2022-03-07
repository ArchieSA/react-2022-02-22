import { useState } from 'react';
import { Tabs } from './tabs/component';
import { Restaurant } from './restaurant/component';

export function App({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({ id }) => id === activeId);

  return (
    <div>
      <Tabs restaurants={restaurants} onTabClick={setActiveId} />
      <Restaurant
        restName={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </div>
  );
}
