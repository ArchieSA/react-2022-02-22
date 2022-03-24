export const selectRestaurants = (state) => state.restaurants;

export const selectRestaurantById = (state, restaurantId) =>
    state.restaurants.find(({id}) => id = restaurantId);