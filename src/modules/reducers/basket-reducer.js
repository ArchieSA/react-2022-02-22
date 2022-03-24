import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/basket-actions';

const initialState = {};

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                [action.productId]: (state[action.productId] || 0) + 1,
            };
        case REMOVE_PRODUCT:
            const newCount = state[action.productId] ? state[action.productId] - 1 : 0;
            
            if(newCount == 0) {
                const { [action.productId]: count, ...newState } = state;
                return newState;
            } 

            return {
                ...state,
                [action.productId]: newCount,
            };
            
        default:
            return state;
    }
}