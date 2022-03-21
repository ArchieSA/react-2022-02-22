import { user } from '../../fixtures';
import { Authorization } from './component';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import { authorize, out } from '../../modules/actions/user-actions'

export const AuthorizationContainer = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(
        state => state.user["currentUser"] || null
    );

    const authorizeEvent = useCallback(() => {
        dispatch(authorize(user));
    }, [user]);

    const outEvent = useCallback(() => {
        dispatch(out());
    }, []);

    return (
        <Authorization authorize={authorizeEvent} out={outEvent} currentUser={currentUser}/>
    );
}