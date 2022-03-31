import { useMemo } from 'react';
import { Banner } from '../banner/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import { MenuContainer } from "../menu/container";

export const Restaurant = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant;

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
                        <MenuContainer menu={menu} restId={id} />
                        {/* <Reviews reviews={reviews} />  */}
                    </div>
                </ErrorBoundary>
            </div>
        </div >
    );
};
