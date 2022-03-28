import { selectRestaurantById } from "../restaurants/selectors";
import { createSelector } from 'reselect';

export const selectProducts = (state) => state.products;

export const selectProductsByRestaurantId = createSelector(
    [selectProducts, selectRestaurantById],
    (products, restaurant) => {
        return restaurant.menu.filter((productId) => {
            return products.entities[productId];
        });
    }
)

export const selectProductById = (state, productId) =>
    state.products.entities[productId] || null;

export const selectIsProductsLoading = (state) => state.products.isLoading;
export const selectIsProductsFailed = (state) => state.products.isFailed;