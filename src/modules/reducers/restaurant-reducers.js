import { normalizedRestaurants } from '../../fixtures';
import { UPDATE_RESTAURANT } from '../actions/restaurant-actions';

export const restaurantReducer = (state = normalizedRestaurants, action) => {
  switch (action.type) {
    case UPDATE_RESTAURANT:
      const newState = state.map((restaurant) =>
        restaurant.id === action.id
          ? { ...restaurant, reviews: [action.reviewId, ...restaurant.reviews] }
          : restaurant
      );
      return newState;
    default:
      return state;
  }
};
