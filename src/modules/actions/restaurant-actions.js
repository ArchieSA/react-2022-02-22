export const UPDATE_RESTAURANT = 'restaurant/UPDATE_RESTAURANT';

export const updateRestaurant = (reviewId, restaurantId) => {
  return {
    type: UPDATE_RESTAURANT,
    reviewId,
    id: restaurantId,
  };
};
