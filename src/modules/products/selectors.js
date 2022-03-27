export const selectProductsByRestaurantId = (state, restId) => {
    return state.products.entities[restId];
}

export const selectProductById = (state, productId) => {
    return Object.values(state.products.entities).flat()
        .find(({ id }) => id === productId);
}

export const selectIsProductsLoading = (state) =>
    state.products.isLoading;

export const selectIsProductsLoadingFailed = (state) =>
    state.products.isFailed;
