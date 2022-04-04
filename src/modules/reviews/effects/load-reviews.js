import { reviewsSlice } from '../index';
import { loadUsers } from '../../users/effects/load-users';
import { selectReviewIdsByRestaurantId, selectIsReviewsLoading } from '../selectors';

export function loadReviews(restId = "") {
    return function (dispatch, getState) {
        const state = getState();
        const reviews = selectReviewIdsByRestaurantId(state, restId);
        const isLoadting = selectIsReviewsLoading(state);

        if(reviews && reviews?.length || isLoadting) {
            return;
        }

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