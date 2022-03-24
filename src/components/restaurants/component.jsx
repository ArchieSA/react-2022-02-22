import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { Restaurant } from '../restaurant/component';
import { Basket } from '../basket/component';
import { Tabs } from '../tabs/component';
import { selectRestaurants } from '../../modules/selectors/restaurant-selectors'

import styles from './style.module.css'

export function Restaurants() {
    const restaurants = useSelector(selectRestaurants);

    const [activeId, setActiveId] = useState(restaurants[0].id);
    const tabs = useMemo(
        () => restaurants.map(({ id, name }) => ({ id, label: name })),
        [restaurants]
    );
    const activeRestaurant = useMemo(
        () => restaurants.find((restaurant) => restaurant.id === activeId),
        [activeId, restaurants]
    );

    return (
        <div>
            <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
            <div className={styles.content}>
                <Restaurant restaurant={activeRestaurant} />
                <Basket />
            </div>
        </div>
    );
}