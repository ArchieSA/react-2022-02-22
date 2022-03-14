import { Review } from '../review/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { ErrorBoundary } from '../error-boundary/component';

export const Reviews = ({ reviews }) => {
    const errorMessageReview = 'We\'re sorry. The review is under moderation and can\'t be displyed now.'
    return (
        <div className={styles.reviews}>
            <div>
            {reviews.map((review) => (
                <ErrorBoundary key={review.name} errorMessage={errorMessageReview} className={styles.position}>
                    <Review key={review.id} {...review} />
                </ErrorBoundary>
            ))}
            </div>
        </div>
    );
};

Reviews.propTypes = {
    reviews: PropTypes.array,
};
