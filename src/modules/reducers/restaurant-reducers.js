import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../actions/review-action';

export const restaurantReducer = (state = normalizedRestaurants, action) => {
    switch (action.type) {
        case ADD_REVIEW: 
            return state.map((restaurant) => {
                if (restaurant.id === action.restaurantId) {
                    restaurant.reviews.push(action.review.id);
                } 
                return restaurant;
            });
        default:
            return state;
    }
}
