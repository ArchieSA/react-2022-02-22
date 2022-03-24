import { ADD_PRODUCT, REMOVE_PRODUCT, DELETE_PRODUCT } from '../actions/basket-actions';

const initialState = {};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                [action.productId]: (state[action.productId] || 0) + 1,
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                [action.productId]: state[action.productId] ? state[action.productId] - 1 : 0,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                [action.productId]: 0,
            };

        default:
            return state;
    }
}