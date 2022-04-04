export const selectProducts = (state) => {
    return Object.values(state.products.entities);
}

export const selectProductById = (state, productId) => {
    const products = Object.values(state.products.entities);
    return products.find(({ id }) => id === productId);
}

export const selectIsProductsLoading = (state) => state.products.isLoading;
export const selectIsProductsFailed = (state) => state.products.isFailed;