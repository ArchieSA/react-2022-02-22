import { ADD_PRODUCT, REMOVE_PRODUCT, REMOVE_ALL_PRODUCT } from '../actions/basket-actions';

const initialState = {};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            console.log('ADD_PRODUCT');
            return {
                ...state,
                [action.productName]: (state[action.productName] || 0) + 1,
            };
        case REMOVE_PRODUCT:
            console.log('REMOVE_PRODUCT');
            return {
                ...state,
                [action.productName]: state[action.productName] ? state[action.productName] - 1 : 0,
            };
        case REMOVE_ALL_PRODUCT:
            console.log('REMOVE_ALL_PRODUCT');
            return {
                ...state,
                [action.productName]: 0,
            };
        default:
            return state;
    }
}