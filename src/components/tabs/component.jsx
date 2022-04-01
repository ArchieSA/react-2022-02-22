import cn from 'classnames';

import styles from './styles.module.css';

export function Tabs({ tabs, activeId, onChange }) {
    return (
        <div className={styles.tabs}>
            {tabs.map(({ id, label }) => (
                <span key={id}
                    className={cn(styles.tab, { [styles.active]: id === activeId })}
                    onClick={() => onChange(id)}
                >
                    {label}
                </span>
            ))}
        </div>
    );
}