import { productsSlice } from '../index'
import { selectProducts } from '../selectors'

export function loadProductsIfNotExist() {
    return function (dispatch, getState) {
        const state = getState();
        const products = selectProducts(state);
        
        if (products?.length) {
            return;
        }

        dispatch(productsSlice.actions.startLoading());

        fetch('http://localhost:3001/api/products').then((res) => res.json()).then((products) => {
            dispatch(productsSlice.actions.addProducts({
                products: products.reduce((acc, product) => {
                    acc[product.id] = product;
                    return acc;
                }, {})
            }));
        }).catch((error) => {
            dispatch(productsSlice.actions.failLoading({ error }))
        });
    }
}
