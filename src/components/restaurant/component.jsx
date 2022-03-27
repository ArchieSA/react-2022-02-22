import { useEffect } from 'react';
import { Banner } from '../banner/component';
import { Basket } from '../basket/component';
import { ErrorBoundary } from '../error-boundary/component';
import styles from './styles.module.css';
import { ReviewsContainer } from "../reviews/container";
import { MenuContainer } from "../menu/container";
import { useDispatch, useSelector } from "react-redux";
import { loadReviews } from "../../modules/reviews/effects/load-reviews";
import { selectAverageRating, selectReviewsByRestaurantId } from "../../modules/reviews/selectors";
import { Rate } from "../rate/component";

export const Restaurant = ({ restaurant }) => {
    const { id, name } = restaurant;

    const dispatch = useDispatch();
    const reviews = useSelector(state => selectReviewsByRestaurantId(state, id));

    useEffect(() => {
        if (!reviews) {
            dispatch(loadReviews(id));
        }
    }, [id, reviews]);

    const averageRating = useSelector(state =>
        selectAverageRating(state, id)
    );

    return (
        <div>
            <Banner heading={name}>
                {averageRating > 0 && <Rate value={averageRating}/>}
            </Banner>

            <div className={styles.restaurant}>
                <ErrorBoundary key={id}>
                    <div>
                        <MenuContainer restId={id} />
                        <ReviewsContainer restId={id} />
                    </div>
                </ErrorBoundary>
                <Basket />
            </div>
        </div >
    );
};
