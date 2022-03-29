
//import { useMemo } from 'react';
import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectAverageRating } from '../../modules/selectors/restaurant-selectors';

export const Restaurant = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant;

    //const averageRating = useSelector(state => selectAverageRating(state, id));

    /*const averageRating = useMemo(() => {
        const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / reviews.length);
    }, [reviews]);*/

    return (
        <div>
            <Banner heading={name}>
                {/* <Rate value={averageRating} /> */}
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <Menu menu={menu} />
                    {/* <Reviews reviews={reviews} />  */}
                </ErrorBoundary>
            </div>
        </div >
    );
};
