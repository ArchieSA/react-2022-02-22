export const selectProducts = (state) => state.products;

export const selectProductById = (state, productId) => state.products.find(({ id }) => id === productId);

export const selectProductByName = (state, productName) => state.products.find(({ name }) => name === productName);

export const selectProductsFromMenu = (state, menu) => {
    const res = [];
    for(const productId of menu) {
        res.push(state.products.find(({ id }) => id === productId));
    }
    return res;
}
