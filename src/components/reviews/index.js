import styles from "./style.module.css";
import {Review} from "../review";
import {Rate} from "../rate";

export const Reviews = ({reviews}) => {

    const score = (reviews) => {
        if (reviews.length === 0) {
            return 0;
        }
        const scoreSum = reviews.reduce((sum, review) => sum + review.rating, 0);
        return  Math.floor(scoreSum / reviews.length);
    }

    return (
        <div className={styles.reviews}>
            <h3 className={styles.head}>
                Reviews ({reviews.length}) <Rate value={score(reviews)} className={styles.rating} />
            </h3>
            {reviews.length > 0 ?
                <div>
                    {reviews.map(review => <Review key={review.id} {...review} />)}
                </div>
                :
                <p>there are no reviews yet :(</p>
            }
        </div>
    )
}
