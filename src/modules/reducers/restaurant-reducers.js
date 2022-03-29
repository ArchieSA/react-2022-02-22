import { normalizedRestaurants } from '../../fixtures';

export const restaurantReducer = (state = normalizedRestaurants, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
