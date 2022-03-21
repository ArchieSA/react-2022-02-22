export const LOGIN_USER = 'user/LOGIN_USER';
export const LOGOUT_USER = 'user/LOGOUT_USER';

export const loginUser = (name) => {
    return {
        type: LOGIN_USER,
        name: name,
    };
}

export const logoutUser = (name, avatar) => {
    return {
        type: LOGOUT_USER,
        name: name,
    };
}

