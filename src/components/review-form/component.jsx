import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../../modules/actions/review-actions';
import { addUser } from '../../modules/actions/user-actions';
import styles from './styles.module.css';

export const ReviewForm = () => {
    const [formValues, setControlValue] = useState({
        userName: '',
        text: '',
        rating: ''
    });
    const dispatch = useDispatch();

    const onControlValueChange = (event) => {
        setControlValue({
            ...formValues,
            [event.target.name]: event.target.value
        })
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        // TODO: хочется, чтобы последовательно выполнялись два диспатча -
        // первый на добавление юзера, который вернет айдишник только что добавленного пользователя,
        // а после - на добавление ревью с только что полученным айдишником юзера, 
        // т.е. чтобы не пришлось передавать айдишники из компонента, как сделано сейчас (или это ок?)
        // Возможно ли это?
        const userId = `user-${Date.now()}`;
        const reviewId = `review-${Date.now()}`;
        dispatch(addUser(userId, formValues.userName));
        dispatch(addReview(userId, reviewId, formValues.text, formValues.rating));
        setControlValue({
            userName: '',
            text: '',
            rating: ''
        })
    };

    return (
        <form className={styles.reviewForm}>
            <div className={styles.controls}>
                <label className={styles.controlLabel}>
                    <span>User name: </span>
                    <input 
                        type="text" 
                        name="userName" 
                        value={formValues.userName} 
                        onChange={onControlValueChange} />
                </label>
                <label className={styles.controlLabel}>
                    <span>Review text: </span>
                    <textarea 
                        cols="30"
                        rows="10" 
                        name="text" 
                        value={formValues.text} 
                        onChange={onControlValueChange}>
                    </textarea>
                </label>
                <label className={styles.controlLabel}>
                    <span>Rating: </span>
                    <input 
                        type="text" 
                        name="rating" 
                        value={formValues.rating} 
                        onChange={onControlValueChange} />
                </label>
            </div>
            <button 
                className={styles.formButton} 
                onClick={onFormSubmit}>
                Submit
            </button>
        </form>
    );
}