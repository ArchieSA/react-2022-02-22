import { useState } from "react";
import { Menu } from "./menu/component";
import { Tabs } from "./tabs/component";
import { Reviews } from "./reviews/component";
import styles from './style.module.css';

export function App({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({id}) => id === activeId);

  return (
    <div>
      <Tabs restaurants={restaurants} onTabClick={setActiveId}/>
      <div className={styles.restaurantBody}>
        <Menu menu={activeRestaurant.menu} />
        <Reviews reviewsList={activeRestaurant.reviews} />
      </div>
    </div>
  );
}
