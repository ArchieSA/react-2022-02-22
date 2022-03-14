
import { useMemo } from 'react';
import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;
    const errorMessageMenu = 'We\'re sorry. Menu is not available. Please try to reload the page in a few minutes...'
    const errorMessageReviews = 'We\'re sorry. Reviews are not available. Please try to reload the page in a few minutes...'

    const averageRating = useMemo(() => {
        try {
            const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
            return Math.round(total / reviews.length);        
        } catch (error) {
            console.log('error occurs in average rating calculation: ' + error.message)
        }
    }, [reviews]);

    return (
        <div>
            <Banner heading={name}>
            <Rate value={averageRating || 0} />

            </Banner>
            <div className={styles.restaurant}>

            <ErrorBoundary key={restaurant.id} errorMessage={errorMessageMenu} className={styles.position}>
                <Menu menu={menu} />
            </ErrorBoundary>

            <ErrorBoundary key={restaurant.name} errorMessage={errorMessageReviews} className={styles.position}>
                <Reviews reviews={reviews} />
            </ErrorBoundary>
          
            </div>
        </div >
    );
};

Restaurant.propTypes = {
    restaurant: PropTypes.shape({
        name: PropTypes.string,
        menu: PropTypes.array,
        reviews: PropTypes.array 
    })
};
