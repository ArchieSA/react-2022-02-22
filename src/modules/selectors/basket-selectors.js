import { createSelector } from 'reselect';
import { selectProducts } from './product-selectors';

export function selectBasket(state) {
  return state.basket;
}

export const selectProductCount = createSelector(selectBasket, (basket) =>
  Object.keys(basket).reduce((acc, productName) => acc + basket[productName], 0)
);

export const selectOrderedProductIds = createSelector(selectBasket, (basket) =>
  Object.keys(basket)
);

export const selectProductCountById = (state, productId) => {
  return state.basket[productId];
};

export const selectTotalPrice = createSelector(
  [selectBasket, selectProducts],
  (basket, products) => {
    return Object.entries(basket)
      .map(
        ([key, value]) => products.find(({ id }) => id === key).price * value
      )
      .reduce((acc, subtotal) => acc + subtotal, 0);
  }
);
