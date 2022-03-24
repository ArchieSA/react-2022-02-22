export const ADD_REVIEW = 'review/ADD_REVIEW';

export const addReview = (userId, reviewId, text, rating) => {
    return {
        type: ADD_REVIEW,
        review: {
            id: reviewId,
            userId: userId,
            text: text,
            rating: rating
        }
    }
}