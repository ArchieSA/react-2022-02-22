import {SIGN_IN, SIGN_OUT} from "../actions/user-actions";
import {user} from "../../fixtures";


const initialState = {
    isAuthorized : false,
    data : null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuthorized: true,
                data: action.user
            };
        case SIGN_OUT:
            return {
                ...state,
                isAuthorized: false,
                data: null
            };
        default:
            return state;
    }
}