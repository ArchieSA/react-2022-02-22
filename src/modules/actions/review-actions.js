export const ADD_REVIEW = 'review/ADD_REVIEW';

export const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review
    }
}