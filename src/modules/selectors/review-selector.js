export const selectReviews = (state) => state.reviews;

export const selectReviewById = (state, reviewId) =>
    state.reviews.find(({ id }) => id === reviewId);