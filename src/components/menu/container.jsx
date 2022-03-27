import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from "../../modules/products/effects/load-products";
import { Loader } from "../loader/component";
import { selectIsProductsLoading, selectIsProductsLoadingFailed, selectProductsByRestaurantId } from "../../modules/products/selectors";
import Menu from "./component";

export const MenuContainer = ({ restId }) => {
    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsProductsLoading);
    const isFailed = useSelector(selectIsProductsLoadingFailed);
    const products = useSelector(state => selectProductsByRestaurantId(state, restId));

    useEffect(() => {
        if(!products && !isLoading) {
            dispatch(loadProducts(restId));
        }
    }, [restId, products, isLoading]);

    if (isLoading) {
        return <Loader />
    }

    if (isFailed) {
        return <div>Refresh later</div>;
    }

    if (!products?.length) {
        return null;
    }

    return <Menu menu={products} restId={restId} />;
}
