import { reviewsSlice } from '../index';

export const loadReviews = (id) => async (dispatch) => {
    dispatch(reviewsSlice.actions.startLoading());

    const reviews = await fetch(`/api/reviews?id=${id}`);

    reviews.json().then(reviews => {
        dispatch(reviewsSlice.actions.addReviews({ reviews }));
    });
}