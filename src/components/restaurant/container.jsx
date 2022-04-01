import React, { useEffect } from 'react';
import { Restaurant } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { loadReviews } from '../../modules/reviews/effects/load-reviews';
import { loadProducts } from '../../modules/product/effects/load-products';
import { selectReviews, selectIsReviewsLoading, selectIsReviewsFailed } from '../../modules/reviews/selector';
import { selectProducts, selectIsProductsLoading, selectIsProductsFailed } from '../../modules/product/selectors';

export const RestaurantContainer = ({ restaurant }) => {
    const { id, name, menu } = restaurant;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts(id));
        dispatch(loadReviews(id));
    }, [id]);

    const reviews = useSelector(selectReviews);
    const isLoadingReviews = useSelector(selectIsReviewsLoading);
    const isFailedReviews = useSelector(selectIsReviewsFailed);

    const products = useSelector(selectProducts)
    const isLoadingProducts = useSelector(selectIsProductsLoading);
    const isFailedProducts = useSelector(selectIsProductsFailed);

    if (isLoadingReviews && isLoadingProducts) {
        return <div>Loading.....</div>
    }

    if (isFailedReviews && isFailedProducts) {
        return <div>Refresh later</div>
    }

    if (!reviews.length && !products.length) {
        return null;
    }

    return <div>
        <Restaurant reviews={reviews} id={id} name={name} menu={menu} />
    </div>
};
