import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

export function Tabs({ tabs, url }) {

    return (
        <div className={styles.tabs}>
            {tabs.map(({ id, label }) => {
                const link = id !== "" ? url+"/"+id : url;
                return (
                <NavLink key={id}
                    className={styles.tab}
                    to={link}
                    activeClassName={styles.active}>
                    {label}
                </NavLink>
                )
            }
            )}
        </div>
    );
}