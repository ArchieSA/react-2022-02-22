export const ADD_REVIEW = 'restaurant/ADD_REVIEW';

export const addReview = (restaurantId, reviewId) => {
    return {
        type: ADD_REVIEW,
        restaurantId,
        reviewId
    }
}