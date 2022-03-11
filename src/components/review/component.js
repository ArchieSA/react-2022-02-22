import { Rate } from '../rate/component';

import styles from './style.module.css';

export const Review = ({ user, rating, text }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_title}>
        <h4>
          <b>{user}</b>
        </h4>
        <Rate rateValue={rating} />
      </div>
      <p className={styles.review_text}>{text}</p>
    </div>
  );
};
