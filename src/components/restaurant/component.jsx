
import { useMemo } from 'react';
import Menu from '../menu/component';
import Reviews from '../reviews/component';
import Banner from '../banner/component';
import Rate from '../rate/component';
import { MenuErrorBoundary } from '../menu-error-boundary/component';
import { ReviewsErrorBoundary } from '../reviews-error-boundary/component';

import styles from './styles.module.css';
import PropTypes from 'prop-types'

const Restaurant = ({ id, name, menu, reviews }) => {

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
                <MenuErrorBoundary key={id}>
                    <Menu menu={menu} />
                </MenuErrorBoundary>
                <>
                    <ReviewsErrorBoundary key={id}>
                        <Reviews reviews={reviews} />
                    </ReviewsErrorBoundary>
                </> 
                 
            </div>
        </div >
    );
};

Restaurant.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    menu: PropTypes.array,
    reviews: PropTypes.array,
}

Restaurant.defaultProps = {
    menu: [],
    reviews: [],
}

export default Restaurant