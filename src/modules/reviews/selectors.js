import { createSelector } from "reselect";

export const selectIsReviewsLoading = (state) =>
    state.reviews.isLoading;

export const selectIsReviewsLoadingFailed = (state) =>
    state.reviews.isFailed;

export const selectReviewsByRestaurantId = (state, restId) =>
    state.reviews.entities[restId]

export const selectAverageRating = createSelector(
    selectReviewsByRestaurantId,
    (reviews) => {
        const ratings = reviews?.map(review => review.rating);
        return ratings?.reduce((acc, rating) => acc + rating, 0) / ratings?.length;
    }
)
