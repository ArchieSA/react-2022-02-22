import { Review } from '../review/component';
import styles from './styles.module.css';
import { AddReviewFormContainer } from '../add-review-form/container';

export const Reviews = ({ reviews, restaurantId }) => {
  return (
    <>
      <AddReviewFormContainer restaurantId={restaurantId} />
      <div className={styles.reviews}>
        {reviews.map((reviewId) => (
          <Review key={reviewId} reviewId={reviewId} />
        ))}
      </div>
    </>
  );
};
