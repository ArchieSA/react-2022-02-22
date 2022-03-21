import styles from './styles.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import {FaUserAlt} from 'react-icons/fa'

export const User = () => {
    const userInfo = useSelector( state => state.user )
    return (
        <div className={styles.user}>
            <i className={styles.avatar}><FaUserAlt /></i>
            <p className={styles.name}>Hi, <span>{userInfo.name}</span>!</p>
        </div>
    )
}