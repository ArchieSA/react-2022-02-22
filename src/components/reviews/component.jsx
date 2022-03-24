import { useSelector } from 'react-redux';
import { selectReviews } from '../../modules/selectors/review-selectors';
import { Review } from '../review/component';
import styles from './styles.module.css';

export const Reviews = () => {
    const reviews = useSelector(selectReviews);

    return (
        <div className={styles.reviews}>
            {reviews.map((review) => (
                <Review key={review.id} review={review} />
            ))}
        </div>
    );
};
