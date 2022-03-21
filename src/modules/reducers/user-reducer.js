import { AUTHORIZE, OUT } from "../actions/user-actions";

const initialState = {
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHORIZE:
            return {
                ...state,
                currentUser: action.user,
            }
        case OUT: 
            return {
                ...state,
                currentUser: null,
            }
        default: 
            return state
    }
}