import { LOGIN, LOGOUT } from '../actions/user-actions';

const initialState = {
  isLoggedIn: false,
  user: undefined,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const newUser = {
        username: action.username,
        budget: action.budget,
        gender: action.gender,
      };
      return {
        ...state,
        isLoggedIn: true,
        user: newUser,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
