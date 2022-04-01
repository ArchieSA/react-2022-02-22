export const selectProducts = (state) => Object.values(state.products.entities);

export const selectProductById = (state, productId) => {
    const products = Object.values(state.products.entities);
    return products.find(({ id }) => id === productId);
}

export const selectIsProductsLoading = (state) => state.reviews.isLoading;
export const selectIsProductsFailed = (state) => state.reviews.isFailed;   