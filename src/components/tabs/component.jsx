import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.css';

function Tabs({ tabs, activeId, onChange }) {
    return (
        <div className={styles.tabs}>
            {tabs.map(({ id, label }) => (
                <span
                    key={id}
                    className={cn(styles.tab, { [styles.active]: id === activeId })}
                    onClick={() => onChange(id)}
                >
                    {label}
                </span>
            ))}
        </div>
    );
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeId: PropTypes.string.isRequired,
  onchange: PropTypes.func
}

export { Tabs }