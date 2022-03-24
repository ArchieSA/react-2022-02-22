import { normalizedReviews } from '../../fixtures'

export const reviewReducer = (state = normalizedReviews, action) => {
    switch (action.type) {
        default:
            return state;
    }
}