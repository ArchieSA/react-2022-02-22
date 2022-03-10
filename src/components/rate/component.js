import React from 'react';
import sprite from '../../assets/icons/sprite.svg';
import styles from './style.module.css';

const Rate = ({ value }) => {
    const ids = [];
    for(let i = 0; i < value; i ++) {
        ids[i] = Math.random();
    } 
    return <>
        {
            ids.map(id => {
                return <span key={id}>
                    <svg className={styles.icon}>
                        <use href={sprite + `#star`} />
                    </svg>
                </span>
            })
        }
    </>
}

export default Rate;