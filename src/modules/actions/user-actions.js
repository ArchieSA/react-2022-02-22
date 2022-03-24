export const ADD_USER = 'user/ADD_USER';

export const addUser = (userId, userName) => {
    return {
        type: ADD_USER,
        user: {
            id: userId,
            name: userName
        }
    }
}