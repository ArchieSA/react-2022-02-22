export const selectRestaurants = (state) =>
    Object.values(state.restaurants.entities);

export const selectIsRestaurantsLoading = (state) => state.restaurants.isLoading;
export const selectIsRestaurantsFailed = (state) => state.restaurants.isFailed;

export const selectRestaurantAverageRating = (state) => {
    const reviews = Object.values(state.reviews.entities);
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
};