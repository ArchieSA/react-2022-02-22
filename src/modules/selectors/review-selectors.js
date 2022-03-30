export const selectReviews = state => state.reviews;

export const selectReviewById = (state, reviewId) => {
    return state.reviews.find(({ id }) => id === reviewId);
}