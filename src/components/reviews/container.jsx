import {Reviews} from "./component";
import {ReviewFormContainer} from "../review-form/container";

export const ReviewsContainer = ({reviews, restaurant}) => {
    return (
        <>
            <Reviews reviews={reviews} />
            <ReviewFormContainer restaurantId={restaurant.id} />
        </>
    )
}