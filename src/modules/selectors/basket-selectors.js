import { createSelector } from 'reselect';
import { selectProducts } from './product-selectors';

export function selectBasket(state) {
    console.log(state);
    return state.basket;
}

export const selectProductCount = createSelector(
    selectBasket,
    (basket) => Object.keys(basket).reduce((acc, productName) => acc + basket[productName], 0)
);

export const selectOrderedProductIds = createSelector(
    selectBasket,
    (basket) => Object.keys(basket),
);

export const selectProductCountById = (state, productId) => {
    return state.basket[productId];
};

export const selectOrderedProductsPrice = createSelector(
    [selectBasket, selectProducts],
    (basket, products) => Object.keys(basket).reduce((acc, productId) => {
        return acc + products.find(({ id }) => id === productId).price * basket[productId];
    }, 0)
);