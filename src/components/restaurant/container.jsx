import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Restaurant } from "./component";
import { selectRestaurantsById } from '../../modules/restaurants/selectors';
import { selectReviewsByRestaurantId } from "../../modules/reviews/selectors";
import { loadReviews } from "../../modules/reviews/effects/load-reviews";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const RestaurantContainer = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(loadReviews(id));
    }, []);

    const reviews = useSelector((state) => selectReviewsByRestaurantId(state, id));
    const restaurant = useSelector((state) => selectRestaurantsById(state, id));

    return <Restaurant restaurant={restaurant} reviews={reviews}/>
}