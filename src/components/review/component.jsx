import PropTypes from 'prop-types';
import { Rate } from '../rate/component';
import styles from './styles.module.css';
import { ErrorBoundaryReview } from '../error-boundary-review/component';

const Review = ({ user, text, rating, id }) => (
    <ErrorBoundaryReview key={id}>
        <div className={styles.review}>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.name}>{user}</h4>
                    <p className={styles.comment}>{text}</p>
                </div>
                <div className={styles.rate}>
                    <Rate value={rating} />
                </div>
            </div>
        </div>
    </ErrorBoundaryReview>
);

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
}

Review.defaultProps = {
  user: 'Unknown user',
  text: 'No review'
}

export { Review }