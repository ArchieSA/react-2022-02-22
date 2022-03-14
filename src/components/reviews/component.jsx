import Review from '../review/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { ReviewErrorBoundary } from '../review-error-boundary/component';

const Reviews = ({ reviews }) => {
    
    if (reviews.length === 0) {
        throw new Error("ошибка");
    }
    return (
        <div className={styles.reviews}>
            {reviews.map((review) => (
                <ReviewErrorBoundary key={review.id}>
                    <Review key={review.id} {...review} />
                </ReviewErrorBoundary>
            ))}
        </div>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.array.isRequired
}

export default Reviews