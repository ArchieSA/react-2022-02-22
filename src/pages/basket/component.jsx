import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectProductCount, selectOrderedProductIds } from '../../modules/basket/selectors'
import { BasketItem } from '../../components/basket-item/component'
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import React from 'react';

export const Basket = ({ className }) => {
    const total = useSelector(selectProductCount);
    // const price = useSelector(selectOrderedProducts);
    const orderedProducts = useSelector(selectOrderedProductIds);
    const history = useHistory();

    const makeOrder = useCallback(() => {
        //logic
        history.replace('/restaurants');
    }, [history]);

    if (!total) {
        return (
            <div className={styles.basket}>
                <h4 className={styles.title}>Select a meal from the list</h4>
            </div>
        );
    }

    return (
        <div className={styles.basket}>
            <h4 className={styles.title}>Basket</h4>
            {orderedProducts.map((productId) => (
                <BasketItem key={productId} productId={productId} />
            ))}
            <hr className={styles.hr} />
            <div className={styles.basketItem}>
                <div className={styles.name}>
                    <p>Total</p>
                </div>
                <div className={styles.info}>
                    <p>{`${total}`}</p>
                </div>
            </div>
            <button primary block onClick={makeOrder}>
                checkout
            </button>
        </div>
    );
}