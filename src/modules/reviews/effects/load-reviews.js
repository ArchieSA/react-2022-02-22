import axios from 'axios';
import { reviewsSlice } from '../index';

export const loadReviews = (restId) => {
    return function (dispatch) {
        dispatch(reviewsSlice.actions.startLoading());
        axios
            .request({ url: `/api/reviews?id=${restId}` })
            .then(({ data }) => {
                dispatch(
                    reviewsSlice.actions.addReviews({ reviews: {[restId]: data} })
                );
            })
            .catch((error) => dispatch(reviewsSlice.actions.failLoadingReviews({ error })));
    };
};
