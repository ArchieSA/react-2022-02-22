export const SIGN_IN = 'user/SIGN_IN';
export const SIGN_OUT = 'user/SIGN_OUT';


export const signIn = (user) => {
    return {
        type: SIGN_IN,
        user: user,
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
}

