import PropTypes from 'prop-types';
import { Review } from '../review/component';
import styles from './styles.module.css';

const Reviews = ({ reviews }) => {
    return (
        <div className={styles.reviews}>
            {reviews.map((review) => (
                <Review key={review.id} {...review} />
            ))}
        </div>
    );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired
}

export { Reviews }