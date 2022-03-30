import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './styles.module.css';
import avatar from './img/avatar.png';
import { logout } from '../../modules/actions/login-actions';

export const UserAvatar = () => {
    const currentUser = useSelector(state => state.userAvatar)
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    }
    return <div className={s.menu}>
        <div className={s.info}>
            <div className={s.avatar}>
                <img className={s.image} src={avatar} alt="avatar" />
            </div>
            <span className={s.name}>{currentUser.name}</span>
        </div>
        <button onClick={onLogout}>Logout</button>
    </div>

}