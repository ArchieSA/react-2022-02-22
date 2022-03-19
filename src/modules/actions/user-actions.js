export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';

export const userLogin = (username, budget) => {
  return {
    type: LOGIN,
    username: username,
    budget: budget,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};
