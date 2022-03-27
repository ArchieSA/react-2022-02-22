import axios from 'axios';
import { productsSlice } from '../index';

export const loadProducts = (restId) => {
    return function (dispatch) {
        dispatch(productsSlice.actions.startLoading());
        axios
            .request({ url: `/api/products?id=${restId}` })
            .then(({ data }) => {
                dispatch(
                    productsSlice.actions.addProducts({ products: {[restId]: data} })
                );
            })
            .catch((error) => dispatch(productsSlice.actions.failLoadingProducts({ error })));
    };
};
