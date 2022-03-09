import greyStar from "../../assets/icons/greyStar.svg";

import styles from "./style.module.css";

const RATE_STARS_COUNT = 5;

const createStars = (count, rating = 0) => {
  return [...Array(count).keys()].map((index) => 
  <img className={styles.star + `${index <= rating - 1 ? ' ' +
     styles['active-star'] : ''}`} src={greyStar} alt="rating-star" />);
} 

export const Rate = ({className,  rating = 0 }) => {
   return <div className={styles.rate + className ? ' ' + className : ''}>
        {createStars(RATE_STARS_COUNT, rating)}
     </div>;
}