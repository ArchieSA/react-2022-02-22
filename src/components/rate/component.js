import star from '../../assets/icons/star.svg';
import styles from './style.module.css';

export const Rate = ({ rateValue }) => {
  if (rateValue < 1 || rateValue > 5) {
    return <p>No rating available</p>;
  }
  const lastGoldStarIndex = Math.round(rateValue) - 1;
  return [...Array(5)].map((_, i) => {
    return (
      <img
        key={i}
        src={star}
        alt="star rating"
        className={i <= lastGoldStarIndex ? styles.star_gold : styles.star_grey}
      />
    );
  });
};
