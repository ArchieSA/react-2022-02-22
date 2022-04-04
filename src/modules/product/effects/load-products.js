import { selectProducts } from "../selectors";
import { productsSlice } from "..";

export const loadProducts = (id) => (dispatch, getState) => {
        const state = getState();
        const products = selectProducts(state);
    
        if (products?.length) {
            return;
        }

        dispatch(productsSlice.actions.startLoading());

        fetch(`http://localhost:3001/api/products?id=${id}`).then(res => res.json()).then(products => {
            dispatch(productsSlice.actions.addProducts({ products }));
        }).catch(error => {
            dispatch(productsSlice.actions.failLoading({ error }))
        });
}

export const loadProductsList = () => (dispatch, getState) => {
    const state = getState();
    const products = selectProducts(state);

    if (products?.length) {
        return;
    }

    dispatch(productsSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/products_list`).then(res => res.json()).then(products => {
        dispatch(productsSlice.actions.addProducts({ products }));
    }).catch(error => {
        dispatch(productsSlice.actions.failLoading({ error }))
    });
}