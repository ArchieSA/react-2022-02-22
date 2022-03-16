import { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';

export const Header = ({ callback, effect }) => {
    useEffect(() => {
        effect();
    }, []);

    return (
        <header className={styles.header}>
            {/* <Logo /> */}
            <span>Test ME</span>
            <button onClick={() => callback()}>click me</button>
        </header>
    )
};
