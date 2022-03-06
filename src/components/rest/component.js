import { Menu } from "../menu/component"
import { Reviews } from "../reviews/component"
import { Rate } from "../rate/component"

export function Rest({ menu, reviews }) {
    const avgRate = Math.round(reviews.reduce((acc, item) => acc + item.rating, 0)/reviews.length)
  return (
    <div>
        <span>Average rating: </span>
        <Rate rate={avgRate} />
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
    </div>
  );
}
