import { createSelector } from 'reselect';
import {selectProducts} from "./product-selectors";

export function selectBasket(state) {
    return state.basket;
}

export const selectProductCount = createSelector(
    selectBasket,
    (basket) => Object.keys(basket).reduce((acc, productName) => acc + basket[productName], 0)
);

export const selectOrderedProductIds = createSelector(
    selectBasket,
    (basket) => Object.keys(basket).filter(productId => basket[productId] > 0),
);

export const selectProductCountById = (state, productId) => {
    return state.basket[productId];
};

export const selectSum = createSelector(
    [selectProducts, selectBasket],
    (products, basket) =>
        Object.keys(basket).reduce(
            (acc, productId) => acc + basket[productId] * products.find(({ id }) => id === productId).price,
            0
        ),
);
