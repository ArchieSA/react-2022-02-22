export const selectReviews = (state) => Object.values(state.reviews.entities);

export const selectIsReviewsLoading = (state) => state.reviews.isLoading;
export const selectIsReviewsFailed = (state) => state.reviews.isFailed;

