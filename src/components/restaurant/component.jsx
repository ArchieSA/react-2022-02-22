
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectReviewsByRestaurantId } from '../../modules/reviews/selectors';

import { MenuContainer } from '../menu/container';
import { Banner } from '../banner/component';
import { ErrorBoundary } from '../error-boundary/component';
import { ReviewsContainer } from '../reviews/container';
import { Rate } from '../rate/component';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Tabs } from '../tabs/component';

import styles from './styles.module.css';

export const Restaurant = ({ restaurant, reviews }) => {
    const { name } = restaurant;
    const { path, url } = useRouteMatch();

    const averageRating = useMemo(() => {
        if(reviews && Object.keys(reviews).length === 0) return 0;
        const total = Object.values(reviews).reduce((acc, { rating }) => acc + rating, 0);
        return Math.round(total / Object.keys(reviews).length);
    }, [reviews]);

    const tabs = [
        { id: "", label: "Menu" },
        { id:'reviews', label: "Reviews" },
    ];

    return (
        <div>
            <Banner heading={name}>
                <Rate value={averageRating} />
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <div>

                        <Tabs tabs={tabs} url={url} />
                        <Switch>
                            <Route path={`${url}/reviews`}>
                                <ReviewsContainer restaurantId={restaurant.id} /> 
                            </Route>
                            <Route >
                                <MenuContainer restaurantId={restaurant.id} />
                            </Route>
                        </Switch>

                    </div>
                </ErrorBoundary>
            </div>
        </div >
    );
};
