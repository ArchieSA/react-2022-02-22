export const LOGIN_USER = 'user/LOGIN_USER';
export const LOGOUT_USER = 'user/LOGOUT_USER';

export const loginUser = (userId, userName, userGender, birthYear) => {
    return {
        type: LOGIN_USER,
        userId: userId,
        userName: userName,
        userGender: userGender,
        birthYear: birthYear
    };
};

export const logoutUser = (userId) => {
    return {
        type: LOGOUT_USER,
        userId: userId
    }
};
