import { selectRestaurantIds } from "../../modules/restaurants/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProductsForRestaurantIfNotExist } from "../../modules/product/effects/load-products";
import {
    selectAllProducts,
    selectIsProductsLoading,
    selectIsProductsLoadingFailed,
} from "../../modules/product/selectors";
import { Dishes } from "./component";
import { loadRestaurantsIfNotExist } from "../../modules/restaurants/effects/load-restaurants";

export const DishesContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRestaurantsIfNotExist());
    }, [])
    const restaurantIds = useSelector(selectRestaurantIds);

    useEffect(() => {
        restaurantIds.map(id => dispatch(loadProductsForRestaurantIfNotExist(id)));
    }, [JSON.stringify(restaurantIds)]);

    const isLoading = useSelector(selectIsProductsLoading);
    const isFailed = useSelector(selectIsProductsLoadingFailed);
    const products = useSelector(selectAllProducts);

    if (isLoading) {
        return <div>Loading menu...</div>
    }

    if (isFailed) {
        return <div>Refresh later</div>;
    }

    if (!products?.length) {
        return null;
    }

    return <Dishes menu={products} />;
}

