import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

export function Tabs({ tabs }) {
    const { path } = useRouteMatch();
    return (
        <div className={styles.tabs}>
            {tabs.map(({ id, label }) => (
                <NavLink to={`${path}/${id}`} key={id} className={styles.tab} activeClassName={styles.active}>
                    {label}
                </NavLink>
            ))}
        </div>
    );
}