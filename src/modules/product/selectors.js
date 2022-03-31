import { createSelector } from 'reselect';
import { selectRestaurantById } from "../restaurants/selectors";

export const selectProducts = (state) => state.products.entities;

export const selectProductsKeys = (state) => Object.keys(state.products.entities);

export const selectProductsByRestaurantId = createSelector(
    [selectProducts, selectRestaurantById],
    (products, restaurant) => {
        if (!restaurant) return;
        return restaurant.menu.filter((productId) => {
            return products[productId]?.id;
        });
    }
)

export const selectProductById = (state, productId) =>
    state.products.entities[productId];

export const selectIsProductsLoading = (state) => state.products.isLoading;
export const selectIsProductsFailed = (state) => state.products.isFailed;