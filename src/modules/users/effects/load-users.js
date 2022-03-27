import axios from 'axios';
import { usersSlice } from '../index';

export const loadUsers = () => {
  return function (dispatch) {
    dispatch(usersSlice.actions.startLoading());
    axios
      .request({ url: '/api/users' })
      .then(({ data }) =>
        dispatch(usersSlice.actions.addUsers({ users: data }))
      )
      .catch((error) =>
        dispatch(usersSlice.actions.failLoadingUsers({ error }))
      );
  };
};
