export const selectRestaurants = (state) => Object.values(state.restaurants.entities);

export const selectRestaurantById = (state, id) => state.restaurants.entities[id];

export const selectIsRestaurantsLoading = (state) => state.restaurants.isLoading;

export const selectIsRestaurantsFailed = (state) => state.restaurants.isFailed;