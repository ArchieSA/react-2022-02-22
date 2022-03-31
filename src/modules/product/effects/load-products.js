import { selectRestaurantProductIds } from "../../restaurants/selectors";
import { selectProductById } from "../selectors";
import { productsSlice } from "../index";

export function loadProductsForRestaurantIfNotExist(restId) {
    return function (dispatch, getState) {
        const state = getState();
        const productIds = selectRestaurantProductIds(state, restId);

        // if restaurant does not have menu or all products were already loaded
        if (!productIds ||
            productIds.length > 0 && productIds.every(id => selectProductById(state, id))) {
            return;
        }

        dispatch(productsSlice.actions.startLoading());

        fetch(`http://localhost:3001/api/products?id=${restId}`)
            .then((res) => res.json())
            .then((products) => {
            dispatch(productsSlice.actions.addProducts({
                products: products.reduce((acc, product) => {
                    acc[product.id] = product;
                    return acc;
                }, {})
            }));
        }).catch((error) => {
            dispatch(productsSlice.actions.failLoadingProducts({ error }))
        });
    }
}
