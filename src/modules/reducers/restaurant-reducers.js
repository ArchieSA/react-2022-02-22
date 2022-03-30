import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW_IN_RESTAURANT } from '../actions/restaurant-actions';

export const restaurantReducer = (state = normalizedRestaurants, action) => {
    switch (action.type) {
        case ADD_REVIEW_IN_RESTAURANT: {
            return state.map(restaurant => {
                return restaurant.id === action.restaurantId ? {
                        ...restaurant, 
                        reviews: [...restaurant.reviews, action.reviewId]
                    } : restaurant
            });
        }
        default:
            return state;
    }
}
