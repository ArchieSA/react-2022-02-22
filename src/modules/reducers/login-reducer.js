import { SET_USER, UNSET_USER } from '../actions/login-actions';

const initialState = {
    isAuth: false,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isAuth: true,
            };
        case UNSET_USER:
            return {
                ...state,
                isAuth: false,
            };    
        default:
            return state;
    }
}