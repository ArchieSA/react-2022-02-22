import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../actions/review-action';

export const reviewReducer = (state = normalizedReviews, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            return [
                ...state,
                action.review,
            ]
        default:
            return state;
    }
}