import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../modules/actions/login-actions';
import { UserAvatar } from '../user-avatar/component';
import s from './styles.module.css';


export const Login = () => {
    const isAuth = useSelector(state => state.login.isAuth);
    const dispath = useDispatch();
    const onLogin = useCallback(() => {
        dispath(login());
    }, [])

    return <div className={s.login}>
        {
            !isAuth && <button onClick={onLogin}>Login</button>
        }
        {
            isAuth && <UserAvatar />
        }
    </div>
}