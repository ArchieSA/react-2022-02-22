import { useMemo } from 'react';
import Menu from '../menu/component';
import Reviews from '../reviews/component';
import Banner from '../banner/component';
import Rate from '../rate/component';
import ErrorBoundary from '../error-boundary/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';
import ErrorBoundaryForReviews from '../error-boundary/error-boundary-for-reviews/component';

const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    const averageRating = useMemo(() => {
        const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / reviews.length);
    }, [reviews]);

    return (
        <div>
            <Banner heading={name}>
                <Rate value={averageRating} />
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <Menu menu={menu} />
                </ErrorBoundary>
                <ErrorBoundaryForReviews>
                    <Reviews reviews={reviews} />
                </ErrorBoundaryForReviews>
                
            </div>
        </div >
    );
};

Restaurant.propTypes = {
    restaurant: PropTypes.object,
}

Restaurant.defaultProps = {
    restaurant: {}
}


export default Restaurant;
