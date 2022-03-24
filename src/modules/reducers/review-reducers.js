import { normalizedReviews } from "../../fixtures";
import { ADD_REVIEW } from "../actions/review-actions";

export const reviewReducer = (state = normalizedReviews, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            state.push(
                {
                    id: `review-${Date.now()}`,
                    userId: action.review.userId,
                    text: action.review.text || '',
                    rating: action.review.rating || 0
                }
            );
            return [
                ...state
            ];
        default:
            return state;
    }
}