import { productsSlice } from '../index';

export function loadProducts(restId = "") {
    return function (dispatch) {
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