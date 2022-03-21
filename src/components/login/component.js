import styles from "./styles.module.css";
import { Button } from '../button/component';
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../modules/actions/login-actions'
import { loginUser, logoutUser } from '../../modules/actions/user-actions'

export const Login = () => {
    const dispatch = useDispatch();

    const loginStatus = useSelector(    
        state => state.login.isLogin
    );

    const basket = useSelector(    
        state => state.basket
    );

    const userInfo = useSelector(
        state => state.user
    );

    const handleLogin = useCallback(() => dispatch(login(loginStatus)), [loginStatus]);
 
    useEffect(() => {
        if (!loginStatus) {
            dispatch(logoutUser(userInfo))
        } else {
            dispatch(loginUser(userInfo))
        }
    }, [loginStatus])

    return (
        <div className={styles.login}>
            <Button onClick={handleLogin} value={!loginStatus ? 'login' : 'logout'} />
        </div>
    )
}
