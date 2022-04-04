import React from 'react';
import Menu from '../menu/component';
import { Banner } from '../banner/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';

export const Restaurant = ({ restaurant }) => {
    const { name, menu } = restaurant;

    // const averageRating = useMemo(() => {
    //     const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    //     return Math.round(total / reviews.length);
    // }, [reviews]);

    return (
        <div>
            <Banner heading={name}>
                {/* <Rate value={averageRating} /> */}
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <div>
                        <Menu menu={menu} />
                        {/* <Reviews reviews={reviews} />  */}
                    </div>
                </ErrorBoundary>
            </div>
        </div >
    );
};
