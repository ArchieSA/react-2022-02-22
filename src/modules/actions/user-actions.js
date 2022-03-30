export const ADD_USER = 'user/ADD_USER';

export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    }
}