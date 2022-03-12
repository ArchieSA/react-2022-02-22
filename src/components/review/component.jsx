import { Rate } from '../rate/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const Review = ({ user, text, rating }) => (
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
);

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

Review.defaultProps = {
  user: 'Anonymous',
  rating: 0,
};
