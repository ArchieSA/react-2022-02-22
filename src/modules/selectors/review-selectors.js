export const selectReviews = (state) => state.reviews;

export const selectReviewById = (state, reviewId) =>
  state.reviews.find(({ id }) => id === reviewId);

export const selectUsernameById = (state, userId) =>
  state.users.find(({ id }) => id === userId).name;

export const selectAverageRating = (state, reviewIds) => {
  const ratings = reviewIds.map(
    (reviewId) => state.reviews.find(({ id }) => id === reviewId).rating
  );
  return Math.round(
    ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
  );
};
