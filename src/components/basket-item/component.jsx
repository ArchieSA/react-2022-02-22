import { useSelector } from 'react-redux';
import { selectProductById } from '../../modules/selectors/product-selectors';
import { selectProductCountById } from '../../modules/selectors/basket-selectors';
import styles from './styles.module.css';
import React from 'react';

export const BasketItem = ({ productId }) => {
    const product = useSelector(state => selectProductById(state, productId))
    const count = useSelector(state => selectProductCountById(state, productId))

    return <div>
        {
            count !== 0 && 
            <div key={product.id} className={styles.product}>
                <span className={styles.name}>{product.name}</span>
                <span className={styles.count}>{count}</span>
            </div>
        }    
    </div>
};