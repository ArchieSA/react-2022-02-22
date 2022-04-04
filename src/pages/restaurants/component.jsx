import React, { useMemo } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { RestaurantContainer } from '../../components/restaurant/container';
import { Tabs } from '../../components/tabs/component';

import styles from './style.module.css'

export function Restaurants({ restaurants }) {
    const { path } = useRouteMatch();
    // const [activeId, setActiveId] = useState(restaurants[0].id);
    
    const tabs = useMemo(
        () => restaurants.map(({ id, name }) => ({ id, label: name })),
        [restaurants]
    );
    // const activeRestaurant = useMemo(
    //     () => restaurants.find((restaurant) => restaurant.id === activeId),
    //     [activeId, restaurants]
    // );

    return (
        <div>
            <Tabs tabs={tabs} />
            <Route path={`${path}/:id`}>
                <div className={styles.content}>
                    <RestaurantContainer />
                </div>
            </Route>
        </div>
    );
}