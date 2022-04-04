import { reviewsSlice } from '../index';
import { loadUsers } from '../../users/effects/load-users';

export function loadReviews(restId = "") {
    return function (dispatch) {
        dispatch(reviewsSlice.actions.startLoading());

        fetch('/api/reviews?id='+restId).then((reviews) => reviews.json()).then((reviews) => {
            dispatch(reviewsSlice.actions.addReviews({
                reviews: reviews.reduce((acc, review) => {
                    acc[review.id] = review;
                    return acc;
                }, {})
            }));
        }).catch((error) => {
            dispatch(reviewsSlice.actions.failLoading( { error } ))
        });
    }
}