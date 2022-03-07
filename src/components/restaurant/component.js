import { Menu } from '../menu/component';
import { Rate } from '../rate/component';
import { Reviews } from '../reviews/component';
import { useMemo } from 'react';

import styles from './style.module.css';

export const Restaurant = ({ menu, reviews, restName }) => {
  const avgRating = useMemo(() => {
    return (
      reviews.reduce((sum, { rating }) => sum + rating, 0) / reviews.length || 0
    );
  }, [reviews]);

  return (
    <>
      <h2 className={styles.rest_title}>Selected Restaurant: {restName}</h2>
      <div className={styles.avg_rating}>
        <h3>Average rating</h3>
        <Rate rateValue={avgRating} />
      </div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </>
  );
};
