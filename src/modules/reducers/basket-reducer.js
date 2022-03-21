import {ADD_PRODUCT, DELETE_PRODUCT, REMOVE_PRODUCT} from '../actions/basket-actions';

const initialState = {
};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                [action.productName]: (state[action.productName] || 0) + 1,
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                [action.productName]: state[action.productName] ? state[action.productName] - 1 : 0,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                [action.productName]: 0,
            };
        default:
            return state;
    }
}