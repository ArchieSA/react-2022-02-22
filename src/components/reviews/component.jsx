import Review from '../review/component';
import styles from './styles.module.css';
import PropTypes, { arrayOf } from 'prop-types';

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
    reviews: arrayOf(PropTypes.shape({
        id: PropTypes.string,
        user: PropTypes.string,
        text: PropTypes.string,
        rating: PropTypes.number,
    }))
}

export default Reviews;