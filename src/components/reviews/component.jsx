import { Review } from '../review/component';
import styles from './styles.module.css';

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((reviewId) => (
        <Review key={reviewId} reviewId={reviewId} />
      ))}
    </div>
  );
};
