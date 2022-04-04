import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Restaurants } from "./component"
import { loadRestaurantsIfNotExist } from '../../modules/restaurants/effects/load-restaurants'
import { selectRestaurants, selectIsRestaurantsLoading, selectIsRestaurantsFailed } from '../../modules/restaurants/selectors'
import { loadProductsList } from "../../modules/product/effects/load-products";
import { selectIsProductsFailed, selectIsProductsLoading, selectProducts } from "../../modules/product/selectors";

export const RestaurantsConatainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRestaurantsIfNotExist());
        dispatch(loadProductsList());
    }, []);
    
    const restaurants = useSelector(selectRestaurants);
    const isLoading = useSelector(selectIsRestaurantsLoading);
    const isFailed = useSelector(selectIsRestaurantsFailed);

    const products = useSelector(selectProducts);
    const isLoadingPrtoducts = useSelector(selectIsProductsLoading);
    const isFailedProducts = useSelector(selectIsProductsFailed);

    if (isLoading && isLoadingPrtoducts) {
        return <div>Loading.....</div>
    }

    if (isFailed && isFailedProducts) {
        return <div>Refresh later</div>
    }

    if (!restaurants?.length && !products?.length) {
        return null;
    }

    return <Restaurants restaurants={restaurants} />
}