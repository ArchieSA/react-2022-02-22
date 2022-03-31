import { useDispatch, useSelector } from "react-redux";
import {
    selectIsProductsLoading,
    selectIsProductsLoadingFailed,
    selectProductsByIdsArray
} from "../../modules/product/selectors";
import { useEffect } from "react";
import { loadProductsForRestaurantIfNotExist } from "../../modules/product/effects/load-products";
import Menu from "./component";

export const MenuContainer = ({ restId, menu }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsForRestaurantIfNotExist(restId));
    }, [restId]);

    const isLoading = useSelector(selectIsProductsLoading);
    const isFailed = useSelector(selectIsProductsLoadingFailed);
    const products = useSelector(state => selectProductsByIdsArray(state, menu));

    if (isLoading) {
        return <div>Loading menu...</div>
    }

    if (isFailed) {
        return <div>Refresh later</div>;
    }

    if (!products?.length) {
        return null;
    }

    return <Menu menu={products} />;
}
