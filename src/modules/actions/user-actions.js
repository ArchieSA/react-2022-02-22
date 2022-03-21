export const AUTHORIZE = 'user/AUTHORIZE';
export const OUT = 'user/OUT';

export const authorize = (user) => {
    return {
        type: AUTHORIZE,
        user: user,
    }
} 

export const out = () => {
    return {
        type: OUT,
    }
} 