import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Products } from "./component"
import { loadProductsIfNotExist } from '../../modules/product/effects/load-products'
import { selectProducts, selectIsProductsLoading, selectIsProductsFailed } from '../../modules/product/selectors'

export const ProductsContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductsIfNotExist());
    }, []);

    const products = useSelector(selectProducts);
    const isLoading = useSelector(selectIsProductsLoading);
    const isFailed = useSelector(selectIsProductsFailed);

    if (isLoading) {
        return <div>Loading.....</div>
    }

    if (isFailed) {
        return <div>Refresh later</div>
    }

    if (!products?.length) {
        return null;
    }

    return <Products products={products} />
}