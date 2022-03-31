import Menu from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts, loadAllProductsIfNotExist } from "../../modules/product/effects/load-products";
import { selectProductsByRestaurantId, selectIsProductsLoading, selectIsProductsFailed, selectProductsKeys } from "../../modules/product/selectors";

export const MenuContainer = ({ restaurantId }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        restaurantId? 
            dispatch(loadProducts(restaurantId)) :
            dispatch(loadAllProductsIfNotExist());
    }, []);

    const products = useSelector((state) => selectProductsByRestaurantId(state,restaurantId));
    const allProducts = useSelector(selectProductsKeys);
    const isLoading = useSelector(selectIsProductsLoading);
    const isFailed = useSelector(selectIsProductsFailed);

    if (isLoading) {
        return <div>Loading.....</div>
    }

    if (isFailed) {
        return <div>Refresh later</div>
    }

    if (!products?.length && !allProducts?.length) {
        return null;
    }

    return <Menu menu={products || allProducts}/>

}