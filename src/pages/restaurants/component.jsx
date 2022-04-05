import { useState, useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React from 'react';
import { RestaurantContainer } from '../../components/restaurant/container';
import { Tabs } from '../../components/tabs/component';

import styles from './style.module.css'

export function Restaurants({ restaurants }) {

    const [activeId, setActiveId] = useState(restaurants[0].id);
    const tabs = useMemo(
        () => restaurants.map(({ id, name }) => ({ id, label: name })),
        [restaurants]
    );
    const activeRestaurant = useMemo(
        () => restaurants.find((restaurant) => restaurant.id === activeId),
        [activeId, restaurants]
    );

    const { path } = useRouteMatch();

    return (
        <div>
            <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
            <Route path={`${path}/:id`}>
                <div className={styles.content}>
                    <RestaurantContainer />
                </div>
            </Route>
        </div>
    );
}