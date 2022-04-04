import { Review } from "./component";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../modules/reviews/selectors";
import { selectUserById } from "../../modules/users/selectors";

export const ReviewContainer = ({ reviewId }) => {

    const review = useSelector((state) => selectReviewById(state, reviewId));
    const user = useSelector(state => selectUserById(state, review.userId));

    return (
        <Review user={user!==null?user.name:"hidden"} text={review.text} rating={review.rating} />
    )
}