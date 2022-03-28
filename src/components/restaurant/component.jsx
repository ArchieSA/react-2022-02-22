
import { useMemo } from 'react';
import Menu from '../menu/component';
import { MenuContainer } from '../menu/container';
import { Banner } from '../banner/component';
import { Basket } from '../basket/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import { ReviewsContainer } from '../reviews/container';

export const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    const averageRating = useMemo(() => {
        const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / reviews.length);
    }, [reviews]);
    return (
        <div>
            <Banner heading={name}>
                {/* <Rate value={averageRating} /> */}
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <div>
                        <MenuContainer restaurantId={restaurant.id} />
                        <ReviewsContainer restaurantId={restaurant.id} /> 
                    </div>
                </ErrorBoundary>
                <Basket />
            </div>
        </div >
    );
};
