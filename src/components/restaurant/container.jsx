import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { loadProducts } from '../../modules/product/effects/load-products';
import { selectIsProductsFailed, selectIsProductsLoading, selectProducts } from '../../modules/product/selectors';
import { selectRestaurantById } from '../../modules/restaurants/selectors';
import { Restaurant } from './component';

export const RestaurantContainer = () => {
    const { id } = useParams();
    const restaurant = useSelector(state => selectRestaurantById(state, id));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts(id));
    }, [id]);

    const products = useSelector(selectProducts);
    const isLoadingPrtoducts = useSelector(selectIsProductsLoading);
    const isFailedProducts = useSelector(selectIsProductsFailed);

    if (isLoadingPrtoducts) {
        return <div>Loading.....</div>
    }

    if (isFailedProducts) {
        return <div>Refresh later</div>
    }

    if (!products?.length) {
        return null;
    }

    return <Restaurant restaurant={restaurant} />
}