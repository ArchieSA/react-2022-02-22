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
      const { [action.productId]: amount, ...newState } = state;
      const newAmount = amount - 1;
      return newAmount > 0
        ? {
            ...state,
            [action.productId]: newAmount,
          }
        : newState;
    default:
      return state;
  }
};
