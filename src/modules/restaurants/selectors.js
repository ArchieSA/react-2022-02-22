export const selectRestaurants = (state) =>
    Object.values(state.restaurants.entities);

export const selectRestaurantIds = (state) =>
    Object.keys(state.restaurants.entities);

export const selectIsRestaurantsLoading = (state) => state.restaurants.isLoading;
export const selectIsRestaurantsFailed = (state) => state.restaurants.isFailed;

export const selectRestaurantProductIds = (state, restId) =>
    state.restaurants.entities[restId].menu
