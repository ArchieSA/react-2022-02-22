import { Review } from "./component";
import { selectReviewWithUserName } from "../../modules/selectors/review-selectors";
import { useSelector } from "react-redux";

export const ReviewContainer = ({reviewId}) => {
    const review = useSelector((state) => selectReviewWithUserName(state, reviewId));
    return (
        <Review {...review}/>
    );
}