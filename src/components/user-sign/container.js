import {UserSign} from "./component";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {signIn, signOut} from "../../modules/actions/user-actions";
import {user} from "../../fixtures";

export const UserSignContainer = () => {
    const dispatch = useDispatch();
    const isAuthorized = useSelector(
        state => {
            return state.user.isAuthorized
        }
    );

    const signInHandler = useCallback(() => {
        dispatch(signIn(user));
    }, [user]);

    const signOutHandler = useCallback(() => {
        dispatch(signOut());
    }, []);

    return <UserSign isAuthorized={isAuthorized} signIn={signInHandler} signOut={signOutHandler} />
}