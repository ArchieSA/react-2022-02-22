import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { addReview } from '../../modules/actions/review-action';

import { ReviewForm } from './component';

export const ReviewFormContainer = ({restaurantId}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const user = {
            id: uuidv4(),
            name: formData.get("name"),
        }
        const review = {
            id: uuidv4(),
            userId: user.id,
            text: formData.get("review"),
            rating: +formData.get("rating"),
        }
        
        dispatch(addReview(review, user, restaurantId));

        e.target.reset();
    }

    return (
        <ReviewForm onSubmit={handleSubmit} />
    );
}