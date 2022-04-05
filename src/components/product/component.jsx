import {useContext} from 'react';
import styles from "./style.module.css";
import { Button } from '../button/component';
import { joinIngredients } from './utils';
import {ThemeContext} from '../app';
import React from 'react';

export const Product = ({ product, amount, decrement, increment }) => {
    const theme = useContext(ThemeContext);

    return <div className={styles.product}>
        <span>{theme}</span>
        <div className={styles.content}>
            <div>
                <h4 className={styles.title}>{product.name}</h4>
                <p className={styles.description}>{joinIngredients(product.ingredients)}</p>
                <div className={styles.price}>{product.price} $</div>
            </div>
            <div>
                <div className={styles.counter}>
                    <div className={styles.count}>{amount}</div>
                    <div className={styles.buttons}>
                        <Button onClick={decrement} icon="minus" />
                        <Button onClick={increment} icon="plus" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}