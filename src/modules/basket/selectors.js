import { createSelector } from 'reselect';

export function selectBasket(state) {
    return state.basket;
}

export const selectProductCount = createSelector(
    selectBasket,
    (basket) => Object.values(basket).reduce((acc, { amount }) => acc + amount, 0)
);

export const selectOrderedProductIds = createSelector(
    selectBasket,
    (basket) => Object.keys(basket),
);

export const selectProductCountById = (state, productId) => {
    return state.basket[productId]?.amount;
};
