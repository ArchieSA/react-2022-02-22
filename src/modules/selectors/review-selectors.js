import { createSelector } from 'reselect';

export const selectReviews = (state) => state.reviews;

export const selectReviewById = (state, reviewId) =>
  state.reviews.find(({ id }) => id === reviewId);

export const selectUsernameById = (state, userId) =>
  state.users.find(({ id }) => id === userId).name;

export const selectRestaurantRatings = (state, reviewIds) => {
  return reviewIds.map(
    (reviewId) => state.reviews.find(({ id }) => id === reviewId).rating
  );
};

export const selectAverageRating = createSelector(
  selectRestaurantRatings,
  (ratings) =>
    Math.round(
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    )
);
