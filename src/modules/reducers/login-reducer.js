import { LOGIN } from '../actions/login-actions';

const initialState = {
    isLogin: false
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin,
            };
        default:
            return state;
    }
}
