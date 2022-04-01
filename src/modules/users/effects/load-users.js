import { usersSlice } from '../index';

export const loadUsers = () => async (dispatch) => {
    dispatch(usersSlice.actions.startLoading());

    const users = await fetch(`/api/users`);

    users.json().then(users => {
        dispatch(usersSlice.actions.addUsers({ users }));
    });
}