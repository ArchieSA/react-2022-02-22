export const selectProducts = (state) => Object.values(state.products.entities);

export const selectProductById = (state, productId) => {
        return Object.values(state.products.entities).find((entity) => entity['id'] === productId.toString())
    }

export const selectIsProductsLoading = (state) => state.products.isLoading;
export const selectIsProductsFailed = (state) => state.products.isFailed;