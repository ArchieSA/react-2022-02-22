import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addReview } from '../../modules/actions/review-actions';
import { updateRestaurant } from '../../modules/actions/restaurant-actions';
import { addUser } from '../../modules/actions/user-actions';
import { AddReviewForm } from './component';
import { useCallback } from 'react';

export const AddReviewFormContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();

  const addNewUser = useCallback((userId, name) => {
    dispatch(addUser({ id: userId, name }));
  }, []);

  const addNewReview = useCallback((id, userId, text, rating) => {
    dispatch(addReview({ id, userId, text, rating }, restaurantId));
  }, []);

  const updateCurrentRestaurant = useCallback((reviewId, restaurantId) => {
    dispatch(updateRestaurant(reviewId, restaurantId));
  }, []);

  const addReviewToRestaurant = (name, rating, reviewText) => {
    const userId = uuid();
    const reviewId = uuid();
    addNewUser(userId, name);
    addNewReview(reviewId, userId, reviewText, rating);
    updateCurrentRestaurant(reviewId, restaurantId);
  };

  return <AddReviewForm addReviewToRestaurant={addReviewToRestaurant} />;
};
