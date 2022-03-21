import { LOGIN_USER, LOGOUT_USER } from "../actions/user-actions";

const initialState = {
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            console.log(action);
            return {
                ...state,
                userId: action.userId,
                userName: action.userName,
                userGender: action.userGender,
                birthYear: action.birthYear
            };
        case LOGOUT_USER:
            return {
                ...state,
                userId: null,
                userName: null,
                userGender: null,
                birthYear: null
            };
        default:
            return state;
    }
};
