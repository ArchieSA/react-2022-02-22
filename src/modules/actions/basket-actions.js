export const ADD_PRODUCT = 'basket/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'basket/REMOVE_PRODUCT';


export const addProduct = (productId) => {
    return {
        type: ADD_PRODUCT,
        productId: productId,
    };
}

export const removeProduct = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId: productId,
    };
}