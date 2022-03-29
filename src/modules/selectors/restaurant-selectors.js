export const selectRestaurants = (state) => state.restaurants;

export const selectRestaurant = (state, restaurantId) => state.restaurants.find(({ id }) => id === restaurantId);
