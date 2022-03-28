import { usersSlice } from '../index';

export function loadUsers() {
    return function (dispatch) {
        dispatch(usersSlice.actions.startLoading());

        fetch('/api/users').then((users) => users.json()).then((users) => {
            dispatch(usersSlice.actions.addUsers({
                users: users.reduce((acc, review) => {
                    acc[review.id] = review;
                    return acc;
                }, {})
            }));
        }).catch((error) => {
            dispatch(usersSlice.actions.failLoading( { error } ))
        });
    }
}