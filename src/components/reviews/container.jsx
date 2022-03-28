import { Reviews } from "./component";
import { Loader } from "../loader/component";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadReviews } from "../../modules/reviews/effects/load-reviews";
import { loadUsers } from "../../modules/users/effects/load-users";
import { selectIsReviewsLoading, selectIsReviewsFailed, selectReviewsByRestaurantId } from '../../modules/reviews/selectors';
import { selectIsUsersLoading, selectIsUsersFailed } from '../../modules/users/selectors';

export const ReviewsContainer = ({restaurantId}) => {
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(loadReviews(restaurantId));
        dispatch(loadUsers());
    }, []);

    const reviews = useSelector((state) => selectReviewsByRestaurantId(state, restaurantId));
    const isFailed = useSelector(selectIsReviewsFailed);
    const isLoading = useSelector(selectIsReviewsLoading);
    
    const isUserLoading = useSelector(selectIsUsersFailed);
    //const isUserFailed = useSelector(selectIsUsersLoading);

    if (isLoading && isUserLoading) {
        return <Loader/>
    }
    
    if (isFailed) {
        return <div>Refresh later</div>
    }

    if (!reviews?.length) {
        return null;
    }

    return (
        <Reviews reviews={reviews}/>
    );
}
