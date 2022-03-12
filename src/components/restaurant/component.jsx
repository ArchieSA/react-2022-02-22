import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import {Alert} from "../alert/component";

const Restaurant = ({ restaurant }) => {
    const { name, menu, reviews } = restaurant;

    const averageRating = useMemo(() => {
        const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / reviews.length);
    }, [reviews]);

    const reviewsError = <Alert
        title={"Oops! :("}
        text={"The reviews didn't load, try to come back later"}
        variant={"info"}
    />;

    return (
        <div>
            <Banner heading={name}>
                <Rate value={averageRating} />
            </Banner>

            <div key={restaurant.id} className={styles.restaurant}>
                <ErrorBoundary>
                    <Menu menu={menu} />
                </ErrorBoundary>
                <ErrorBoundary altComponent={reviewsError}>
                    <Reviews reviews={reviews} />
                </ErrorBoundary>
            </div>
        </div >
    );
};

Restaurant.propTypes = {
    restaurant : PropTypes.shape({
        name : PropTypes.string,
        menu : PropTypes.array,
        reviews : PropTypes.array
    }).isRequired
};

export {Restaurant};