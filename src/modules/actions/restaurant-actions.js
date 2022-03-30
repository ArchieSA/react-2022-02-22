export const ADD_REVIEW_IN_RESTAURANT = 'restaurant/ADD_REVIEW';

export const addReviewInRestaurant = (restaurantId, reviewId) => {
    return {
        type: ADD_REVIEW_IN_RESTAURANT,
        restaurantId,
        reviewId
    }
}