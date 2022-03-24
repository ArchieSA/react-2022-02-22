export const ADD_REVIEW = 'review/ADD_REVIEW';


export const addReview = (review, user, restaurantId) => {
    return {
        type: ADD_REVIEW,
        review: review,
        user: user,
        restaurantId: restaurantId,
    }
}