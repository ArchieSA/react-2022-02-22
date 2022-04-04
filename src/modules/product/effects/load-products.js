import { productsSlice } from '../index';
import { selectProductsByRestaurantId } from '../selectors';

export function loadProducts(restId = "") {
    return function (dispatch, getState) {
        const state = getState();
        const products = selectProductsByRestaurantId(state, restId);
        
        if(products && products?.length) {
            return
        }

        dispatch(productsSlice.actions.startLoading());

        fetch('/api/products?id='+restId).then((products) => products.json()).then((products) => {
            dispatch(productsSlice.actions.addProducts({
                products: products.reduce((acc, product) => {
                    acc[product.id] = product;
                    return acc;
                }, {})
            }));
        }).catch((error) => {
            dispatch(productsSlice.actions.failLoading( { error } ))
        });
    }
}