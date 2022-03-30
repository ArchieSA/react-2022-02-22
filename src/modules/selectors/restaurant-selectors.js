import { createSelector } from 'reselect';
import { selectReviews } from '../selectors/review-selectors';

export const selectRestaurants = (state) => state.restaurants;

export const selectRestaurant = (state, restaurantId) => state.restaurants.find(({ id }) => id === restaurantId);

export const selectRestaurantAverageRating = (reviewsId) => createSelector(
    selectReviews,
    (reviews) => {
        const restaurantReviews = [];
        for(let reviewId of reviewsId) {
            restaurantReviews.push(reviews.find(({ id }) => id === reviewId));
        }
        const total = restaurantReviews.reduce((acc, { rating }) => acc + rating, 0);
        const result = Math.round(total / restaurantReviews.length);
        console.log(total);
        return result;
    }
);