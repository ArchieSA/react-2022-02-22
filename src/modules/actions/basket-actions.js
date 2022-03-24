export const ADD_PRODUCT = 'basket/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'basket/REMOVE_PRODUCT';
export const DELETE_PRODUCT = 'basket/DELETE_PRODUCT';


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

export const deleteProduct = (productId) => {
    return {
        type: DELETE_PRODUCT,
        productId: productId,
    };
}