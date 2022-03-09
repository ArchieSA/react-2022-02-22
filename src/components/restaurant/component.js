import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

import styles from "./style.module.css";

export const Restaurant = ({ restaurant }) => {
   return <div className={styles.restaurant}>
        <Menu menu={restaurant.menu} />
        <Reviews data={restaurant.reviews} />
     </div>;
}