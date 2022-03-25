import { normalizedRestaurants } from '../../fixtures'
import {ADD_REVIEW} from "../actions/restaurant-actions";

export const restaurantReducer = (state = normalizedRestaurants, action) => {
    switch (action.type) {
        case ADD_REVIEW :
            return state.map( (rest) => {
                if (rest.id === action.restaurantId) {
                    rest.reviews = [...rest.reviews, action.reviewId]
                }
                return rest
            })
        default:
            return state;
    }
}
