import { useState } from "react";
import { Menu } from "./menu/component";
import { Tabs } from "./tabs/component";

export function App({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({id}) => id === activeId);

  return (
    <div>
      <Tabs restaurants={restaurants} onTabClick={setActiveId}/>
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
}
