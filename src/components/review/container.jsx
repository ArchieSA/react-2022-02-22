import {useSelector} from "react-redux";
import {selectReviewById} from "../../modules/selectors/review-selector";
import {selectUserById} from "../../modules/selectors/user-selector";
import {Review} from "./component";

export const ReviewContainer = ({reviewId}) => {
    const review = useSelector((state) => selectReviewById(state, reviewId));
    const user = useSelector(state => selectUserById(state, review.userId));

    return <Review text={review.text} rating={review.rating} user={user.name} />
}