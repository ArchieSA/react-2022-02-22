import { Rate } from "../rate/component"
import { Menu } from "../menu/component"
import { Reviews } from "../reviews/component"
import styles from "./style.module.css"

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.restaurant}>
      <h1>{restaurant.name}</h1>
      <Rate rating={(restaurant.reviews.reduce((acc, item) => acc+item.rating, 0) / restaurant.reviews.length)} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}