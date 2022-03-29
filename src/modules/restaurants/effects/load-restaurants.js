import { restaurantsSlice } from '../index'

export function loadRestaurants() {
    return function (dispatch) {
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