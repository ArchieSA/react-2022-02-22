export const LOGIN = 'login/LOGIN';

export const login = (isLogin) => {
    return {
        type: LOGIN,
        isLogin: isLogin,
    };
}
