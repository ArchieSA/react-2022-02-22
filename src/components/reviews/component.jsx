import { Review } from '../review/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { ErrorBoundary } from '../error-boundary/component';
import { Alert } from '../alert/component';

export const Reviews = ({ reviews }) => {
  const alertInfo = <Alert type="info" message="Review is on moderation." />;

  return (
    <div className={styles.reviews}>
      {reviews.map(review => (
        <ErrorBoundary key={review.id} alert={alertInfo}>
          <Review key={review.id} {...review} />
        </ErrorBoundary>
      ))}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
