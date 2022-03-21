import { LOGIN_USER } from '../actions/user-actions';
import { LOGOUT_USER } from '../actions/user-actions';
// import avatar from '../../icons/avatar.jpeg';

const initialState = {
};

export const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                name: 'Test User',
            };
        case LOGOUT_USER:
            return {
                ...state,
                name: null,
            };
        default:
            return state;
    }
}
