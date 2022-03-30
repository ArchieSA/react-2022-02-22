import Menu from '../menu/component';
import { Reviews } from '../reviews/component';
import { Banner } from '../banner/component';
import { Rate } from '../rate/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurantAverageRating } from '../../modules/selectors/restaurant-selectors';
import React, { useState } from 'react';
import { addReviewInRestaurant } from '../../modules/actions/restaurant-actions';
import { addReview } from '../../modules/actions/review-actions';
import { addUser } from '../../modules/actions/user-actions';

export const Restaurant = ({ restaurant }) => {
    const { id, name, menu, reviews } = restaurant;
    const averageRating = useSelector(selectRestaurantAverageRating(reviews));

    return (
        <div>
            <Banner heading={name}>
                <Rate value={averageRating} />
            </Banner>
            <div className={styles.restaurant}>
                <ErrorBoundary key={restaurant.id}>
                    <Menu menu={menu} />
                    <Reviews reviews={reviews} /> 
                </ErrorBoundary>
            </div>
            <AddReviewForm restaurantId={id}/>
        </div>
    );
};

export const AddReviewForm = ({ restaurantId }) => {
    const [userName, setUserName] = useState('');
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');

    const dispatch = useDispatch();

    const onUserNameChange = (e) => {
        setUserName(e.target.value);
    }
    
    const onRatingChange = (e) => {
        setRating(e.target.value)
    }

    const onReviewChange = (e) => {
        setReview(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReviewId = Math.random().toString();
        const newUserId = Math.random().toString();

        const newReview = {
            id: newReviewId,
            userId: newUserId,
            text: review,
            rating: parseInt(rating)
        }

        const newUser = {
            id: newUserId,
            name: userName
        }

        dispatch(addReviewInRestaurant(restaurantId, newReviewId));
        dispatch(addReview(newReview));
        dispatch(addUser(newUser));

        setUserName('');
        setRating(5);
        setReview('');
    }

    return <form onSubmit={e=>handleSubmit(e)} className={styles.form}>
        <div className={styles.formItem}>
            <label>
                Name:
                <input type="text" value={userName} onChange={onUserNameChange} placeholder="Your name" required/>
            </label>
        </div>
        <div className={styles.formItem}>
            <label>
                Rating:
                <select value={rating} onChange={onRatingChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
        </div>
        <div className={styles.formItem}>
            <label>
                Review:
                <textarea value={review} onChange={onReviewChange} placeholder="Your opinion" required></textarea>
            </label>
        </div>
        <button type="submit" className={styles.formButton}>Send</button>
    </form>
}
