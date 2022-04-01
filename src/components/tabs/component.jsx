import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

import styles from './styles.module.css';

export function Tabs({ tabs }) {
    const { path } = useRouteMatch();

    return (
        <div className={styles.tabs}>
            {tabs.map(({ id, label }) => (
                <NavLink key={id}
                    className={styles.tab}
                    to={`${path}/${id}`}
                    activeClassName={styles.active}>
                    {label}
                </NavLink>
            ))}
        </div>
    );
}