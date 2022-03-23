import { Rate } from '../rate/component';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {
  selectReviewById,
  selectUsernameById,
} from '../../modules/selectors/review-selectors';

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const username = useSelector((state) =>
    selectUsernameById(state, review.userId)
  );

  return (
    <div className={styles.review}>
      <div className={styles.content}>
        <div>
          <h4 className={styles.name}>{username}</h4>
          <p className={styles.comment}>{review.text}</p>
        </div>
        <div className={styles.rate}>
          <Rate value={review.rating} />
        </div>
      </div>
    </div>
  );
};
