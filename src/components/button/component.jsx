import styles from './styles.module.css';
import React from 'react';

const icons = {
    plus: '+',
    minus: '-',
};

export const Button = ({ icon, ...props }) => (
    <button className={styles.button} {...props}>
        {icons[icon]}
    </button>
)

