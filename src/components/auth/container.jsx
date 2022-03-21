import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../../fixtures';
import { loginUser, logoutUser } from '../../modules/actions/user-actions';
import { Auth } from './component';

export const AuthContainer = () => {
    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => !!state.user.userId);

    const login = useCallback(() => {
        dispatch(loginUser(user.id, user.name, user.gender, user.birth_year))
    });

    const logout = useCallback(() => {
        dispatch(logoutUser(user.id))
    });

    return <Auth login={login} logout={logout} isSignedIn={isSignedIn}/> 
};
