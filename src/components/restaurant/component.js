import { Menu } from '../menu/component';
import { Reviews } from '../reviews/component';
import { Rate } from '../rate/component';
import styles from './style.module.css';

export const Restaurant = ({ restaurantId, menu, reviews }) => {
    const average = reviews.reduce((prevValue, currValue) => {
        const rating = currValue.rating;
        if (typeof rating === 'number' && rating > 0) {
            return prevValue + rating;
        } else {
            return prevValue;
        }
    }, 0) / reviews.length;

    return <div>
        <div className={styles.restarauntAverage}>
            <span>Average rating: { average }</span>
            <Rate rateValue={Math.round(average)} id={restaurantId}/>
        </div>
        <div className={styles.restaurant}>
            <Menu menu={menu} />
            <Reviews reviewsList={reviews} />
        </div>
    </div>
}
