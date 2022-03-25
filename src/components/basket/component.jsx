import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {selectProductCount, selectOrderedProductIds, selectSum} from '../../modules/selectors/basket-selectors'
import {BasketItemContainer} from "../basket-item/container";

export const Basket = ({ className }) => {
    const productCount = useSelector(selectProductCount);
    const sum = useSelector(selectSum);
    const orderedProducts = useSelector(selectOrderedProductIds);

    return (
        <div className={classnames(styles.root, className)}>
            <span>Order</span>
            <div className={styles.productList}>
                {orderedProducts.map((productId) =>
                    <BasketItemContainer key={productId} productId={productId} />)}
            </div>
            <div className={styles.result}>
                <div>{productCount}</div>
                <div>{sum}$</div>
            </div>
        </div>
    )
}