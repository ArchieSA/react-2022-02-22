import { restaurantsSlice } from '../index'
import { selectRestaurants } from '../selectors'

export function loadRestaurantsIfNotExist() {
    return function (dispatch, getState) {
        const state = getState();
        const restaurants = selectRestaurants(state);
        
        if (restaurants?.length) {
            return;
        }

        dispatch(restaurantsSlice.actions.startLoading());

        fetch('/api/restaurants').then((res) => res.json()).then((restaurants) => {
            dispatch(restaurantsSlice.actions.addRestaurants({
                restaurants: restaurants.reduce((acc, restaurant) => {
                    acc[restaurant.id] = restaurant;
                    return acc;
                }, {})
            }));
        }).catch((error) => {
            dispatch(restaurantsSlice.actions.failLoading({ error }))
        });
    }
}
