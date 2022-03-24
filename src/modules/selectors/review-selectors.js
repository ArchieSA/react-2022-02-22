import { createSelector } from 'reselect';
import { selectUsers } from './user-selectors';
import { selectRestaurantById } from './restaurant-selectors';

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

export const selectReviewsByRestaurant = createSelector(
    [selectReviews, selectRestaurantById],
    (reviews, restaurant) => {
        return restaurant.reviews.map((reviewId) => {
            return reviews.find(({id}) => id === reviewId);
        });
    }
)