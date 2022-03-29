export const SET_USER = 'login/SET_USER';
export const UNSET_USER = 'login/UNSET_USER';


export const login = () => {
    return {
        type: SET_USER,
    };
}

export const logout = () => {
    return {
        type: UNSET_USER,
    };
}