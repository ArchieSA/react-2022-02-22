import { normalizedUsers } from "../../fixtures";
import { ADD_USER } from "../actions/user-actions";

export const userReducer = (state = normalizedUsers, action) => {
    switch (action.type) {
        case ADD_USER:
            state.push(
                {
                    id: `user-${Date.now()}`,
                    name: action.user.name || ''
                }
            );
            return [
                ...state
            ];
        default:
            return state;
    }
}