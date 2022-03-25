import {ReviewForm} from "./component";
import {useDispatch} from "react-redux";
import styles from './style.module.css'
import {addUser} from "../../modules/actions/user-actions";
import {createUser} from "../../utils/user";
import {addReview} from "../../modules/actions/review-actions";
import {addReview as addReviewToRest} from "../../modules/actions/restaurant-actions";
import {createReview} from "../../utils/review";
import {useCallback} from "react";

export const ReviewFormContainer = ({restaurantId}) => {
    const dispatch = useDispatch();

    const handleSubmit = useCallback((values) => {
        const user = createUser(values.name);
        const review = createReview(user.id, values.text, parseInt(values.rating));
        dispatch(addUser(user))
        dispatch(addReview(review))
        dispatch(addReviewToRest(restaurantId, review.id));
    }, [])

    return (
        <div className={styles.formContainer}>
            <ReviewForm onSubmit={handleSubmit} />
        </div>
    );
}