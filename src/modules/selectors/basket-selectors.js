import { createSelector } from 'reselect';
import { selectProducts } from './product-selectors';

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

export const selectProductPrice = createSelector(
    [selectBasket, selectProducts],
    (basket, products) => {
        let sum = 0;
        for(const productName of Object.keys(basket)) {
            let  { price } = products.find(({ id }) => id === productName);
            let quantity = basket[productName];
            sum += price * quantity;
        }
        return sum;
    }
);
