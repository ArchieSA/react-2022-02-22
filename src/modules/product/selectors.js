export const selectAllProducts = (state) =>
    Object.values(state.products.entities);

export const selectProductById = (state, productId) =>
    state.products?.entities[productId];

export const selectIsProductsLoading = (state) =>
    state.products.isLoading;

export const selectIsProductsLoadingFailed = (state) =>
    state.products.isFailed;

export const selectProductsByIdsArray = (state, ids) => {
    return ids.reduce((acc, id) => {
        const product = selectProductById(state, id);
        if (product) acc.push(product)
        return acc;
    }, []);
}
