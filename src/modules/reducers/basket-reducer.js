import {
  ADD_PRODUCT,
  REMOVE_ALL_PRODUCT_ITEMS,
  REMOVE_PRODUCT,
} from '../actions/basket-actions';

const initialState = {};

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
        [action.productName]: state[action.productName]
          ? state[action.productName] - 1
          : 0,
      };
    case REMOVE_ALL_PRODUCT_ITEMS:
      const { [action.productName]: amount, ...newState } = state;
      return newState;
    default:
      return state;
  }
};
