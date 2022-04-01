import React from 'react';
import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Basket } from '../basket/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Rate } from '../rate/component';
import { selectRestaurantAverageRating } from '../../modules/restaurants/selectors';

export const Restaurant = ({id, name, menu, reviews }) => {
    const averageRating = useSelector(selectRestaurantAverageRating);

    return (
        <div>
            <Banner heading={name}>
                <Rate value={averageRating} />
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={id}>
                    <div>
                        <Menu menu={menu} />
                        <Reviews reviews={reviews} /> 
                    </div>
                </ErrorBoundary>
                <Basket />
            </div>
        </div>
    );
};
