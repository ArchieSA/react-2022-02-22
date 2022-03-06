import { Menu } from "../menu/component";
import { Rate } from "../rate/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ menu, reviews}) => {

    let ratingSum = reviews.reduce((sum, review) => sum + review.rating, 0);

    const restaurantRating = Math.round(ratingSum / reviews.length);
    
    return (
        <div> 
            <Menu menu={menu} />
            <div>
            Отзывы:
            </div>
            <div>
                Средний рейтинг: <Rate value={restaurantRating}/>
            </div>
            <Reviews reviews={reviews} />
            
        </div>
    );
}