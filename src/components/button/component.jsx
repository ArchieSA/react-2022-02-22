import React from 'react';
import styles from './styles.module.css';

const icons = {
    plus: '+',
    minus: '-',
};

export const Button = ({ icon, ...props }) => (
    <button className={styles.button} {...props}>
        {icons[icon]}
    </button>
)

