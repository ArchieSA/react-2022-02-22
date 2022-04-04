import { usersSlice } from '../index';
import { selectUsers } from '../selectors';

export function loadUsers() {
    return function (dispatch, getState) {
        const state = getState();
        const users = selectUsers(state);
        
        if(users && Object.keys(users).length !== 0) {
            return;
        }

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