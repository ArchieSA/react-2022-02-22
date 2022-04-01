import { productsSlice } from '../index';

export const loadProducts = (id) => async (dispatch) => {
    dispatch(productsSlice.actions.startLoading());

    const products = await fetch(`/api/products?id=${id}`);

    products.json().then(products => {
        dispatch(productsSlice.actions.addProducts({ products }));
    });
}