import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadProducts } from "../../modules/product/effects/load-products";
import { selectIsProductsFailed, selectIsProductsLoading, selectProductsByRestaurantId } from "../../modules/product/selectors";
import { Loader } from "../loader/component";

import Menu from "./component"

export const MenuContainer = ({restaurantId}) => {
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(loadProducts(restaurantId));
    }, []);

    const products = useSelector((state) => selectProductsByRestaurantId(state, restaurantId));
    const isFailed = useSelector(selectIsProductsFailed);
    const isLoading = useSelector(selectIsProductsLoading);

    
    if (isLoading) {
        return <Loader/>
    }
    
    if (isFailed) {
        return <div>Refresh later</div>
    }

    if (!products?.length) {
        return null;
    }

    return (
        <Menu menu={products}/>
    );
}