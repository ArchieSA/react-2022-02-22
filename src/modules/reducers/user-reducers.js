import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../actions/review-action';

export const userReducer = (state = normalizedUsers, action) => {
    switch (action.type) {
        case ADD_REVIEW: 
            return [
                ...state,
                action.user,
            ];
        default:
            return state;
    }
}