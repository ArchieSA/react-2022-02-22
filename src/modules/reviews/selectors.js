import { selectRestaurantById } from "../restaurants/selectors";
import { createSelector } from 'reselect';

export const selectReviews = (state) => state.reviews;

export const selectReviewIdsByRestaurantId = createSelector(
    [selectReviews, selectRestaurantById],
    (reviews, restaurant) => {
        return restaurant.reviews.filter((reviewId) => {
            return reviews.entities[reviewId];
        });
    }
);

export const selectReviewsByRestaurantId = createSelector(
    [selectReviews, selectRestaurantById],
    (reviews, restaurant) => {
        return restaurant.reviews.reduce((result, reviewId) => {
            if(reviews.entities[reviewId]) {
                result[reviewId] = reviews.entities[reviewId];
            }
            return result;
        }, {});
    }
);

export const selectReviewById = (state, reviewId) =>
    state.reviews.entities[reviewId] || null;

export const selectIsReviewsLoading = (state) => state.reviews.isLoading;
export const selectIsReviewsFailed = (state) => state.reviews.isFailed;