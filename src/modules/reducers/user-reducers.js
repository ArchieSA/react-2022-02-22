import { normalizedUsers } from '../../fixtures'

export const userReducer = (state = normalizedUsers, action) => {
    switch (action.type) {
        default:
            return state;
    }
}