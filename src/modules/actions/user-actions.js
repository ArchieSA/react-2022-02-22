export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';

export const userLogin = (username, budget, gender) => {
  return {
    type: LOGIN,
    username: username,
    budget: budget,
    gender: gender,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};
