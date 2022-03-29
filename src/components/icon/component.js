import React from 'react';
import styles from './style.module.css';
import icon from '../../assets/icons/sprite.svg'

const Icon = ({ color }) => {
    return (<span>
        <svg className={styles.icon} style={{color: `${color}`}}>
            <use href={icon + `#sun`} />
        </svg>
    </span>);
}

export default Icon;