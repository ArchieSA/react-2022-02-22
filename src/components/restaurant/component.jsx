import { useMemo } from 'react';
import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import { Alert } from '../alert/component';

export const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews?.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews?.length);
  }, [reviews]);

  const alertError = (
    <Alert type="error" message="An error occurred. Menu is  not available." />
  );
  const alertWarning = (
    <Alert
      type="warning"
      message="Reviews are not available. Try to reload later."
    />
  );

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>

      <div key={restaurant.id} className={styles.restaurant}>
        <ErrorBoundary alert={alertError}>
          <Menu menu={menu} />
        </ErrorBoundary>
        <ErrorBoundary alert={alertWarning}>
          <Reviews reviews={reviews} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }),
};

Restaurant.defaultProps = {
  restaurant: {
    menu: [],
    reviews: [],
  },
};
