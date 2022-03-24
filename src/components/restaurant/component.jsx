
import { useMemo } from 'react';

import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import { ReviewFormContainer } from '../review-form/container';

import { useSelector } from 'react-redux';
import { selectReviewsByRestaurant } from '../../modules/selectors/review-selectors';

import { ErrorBoundary } from '../error-boundary/component';

import styles from './styles.module.css';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    const reachReviews = useSelector((state) => 
        selectReviewsByRestaurant(state, restaurant.id));

    const averageRating = useMemo(() => {
        const total = reachReviews.reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / reachReviews.length);
    }, [reachReviews]);

    return (
        <div>
            <Banner heading={name}>
                <Rate key={restaurant.id} value={averageRating} />
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <Menu menu={menu} />
                    <Reviews reviews={reviews} />
                    <ReviewFormContainer restaurantId={restaurant.id} />
                </ErrorBoundary>
            </div>
        </div >
    );
};
