export const selectRestaurants = (state) =>
    Object.values(state.restaurants.entities);

export const selectIsRestaurantsLoading = (state) =>
    state.restaurants.isLoading;

export const selectIsRestaurantsFailed = (state) =>
    state.restaurants.isFailed;
