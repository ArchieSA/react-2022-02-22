import { createSelector } from 'reselect';
import { selectUsers } from './user-selectors';

export const selectReviews = (state) => state.reviews;

export const selectReviewById = (state, reviewId) => 
    state.reviews.find(({ id }) => id === reviewId);

export const selectReviewWithUserName = createSelector(
    [selectReviewById, selectUsers],
    (review, users) => {
        const user = users.find(({id}) => id === review.userId);
        return {
            ...review,
            user: user.name,
        }
    }
)
    