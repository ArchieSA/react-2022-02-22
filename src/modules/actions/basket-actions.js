export const ADD_PRODUCT = 'basket/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'basket/REMOVE_PRODUCT';


export const addProduct = (productName) => {
    return {
        type: ADD_PRODUCT,
        productName: productName,
    };
}

export const removeProduct = (productName) => {
    return {
        type: REMOVE_PRODUCT,
        productName: productName,
    };
}