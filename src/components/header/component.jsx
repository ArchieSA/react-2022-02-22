import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Basket } from '../basket/component'
import {UserSignContainer} from "../user-sign/container";
import {UserPanel} from "../user-panel/component";
import React from "react";
import {useSelector} from "react-redux";

export const Header = () => {
    const user = useSelector(
        state => {
            return state.user
        }
    );

    return (
        <header className={styles.header}>
            <Logo className={styles.logo}/>
            <UserPanel {...user} />
            <UserSignContainer />
            <Basket className={styles.basket}/>
        </header>
    )
};
