import { useState, useMemo } from 'react';
import React from 'react';
import { RestaurantContainer } from '../restaurant/container';
import { Tabs } from '../tabs/component';
import styles from './style.module.css';

export const Restaurants = ({ restaurants }) => {

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
                <RestaurantContainer restaurant={activeRestaurant} />
            </div>
        </div>
    );
}