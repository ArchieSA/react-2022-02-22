import { useDispatch, useSelector } from 'react-redux';
import { Reviews } from './component';
import {
  selectIsReviewsLoading,
  selectIsReviewsLoadingFailed,
  selectReviewsByRestaurantId
} from "../../modules/reviews/selectors";
import { Loader } from "../loader/component";
import { selectIsUsersLoading, selectIsUsersLoadingFailed, selectUsers } from "../../modules/users/selectors";
import { useEffect } from "react";
import {loadUsers} from "../../modules/users/effects/load-users";

export const ReviewsContainer = ({ restId }) => {
  const dispatch = useDispatch();

  const isUsersLoading = useSelector(selectIsUsersLoading);
  const isUsersFailed = useSelector(selectIsUsersLoadingFailed);
  const users = useSelector(selectUsers);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(loadUsers());
    }
  }, [users.length])

  const isReviewsLoading = useSelector(selectIsReviewsLoading);
  const isReviewsFailed = useSelector(selectIsReviewsLoadingFailed);
  const reviews = useSelector(state => selectReviewsByRestaurantId(state, restId));

  if (isUsersLoading || isReviewsLoading) {
    return <Loader />
  }

  if (isUsersFailed || isReviewsFailed) {
    return <div>Refresh later</div>;
  }

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
