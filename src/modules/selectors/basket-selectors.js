import { createSelector } from 'reselect';
import { selectProducts } from './product-selectors'

export function selectBasket(state) {
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

export const selectOrderSum = createSelector(
    [selectBasket, selectProducts],
    (basket, products) => Object.keys(basket).reduce((sum, productId) => {
        let price = products.find(({id}) => id === productId).price;
        let count = basket[productId];

        return sum + price * count;
    }, 0)
);