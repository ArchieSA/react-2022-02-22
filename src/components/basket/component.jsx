import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectProductCount, selectOrderedProductIds, selectProductPrice } from '../../modules/selectors/basket-selectors'
import { BasketItem } from '../basket-item/component'

export const Basket = ({ className }) => {
    const productCount = useSelector(selectProductCount);
    const price = useSelector(selectProductPrice);
    const orderedProducts = useSelector(selectOrderedProductIds);

    return (
        <div className={classnames(styles.root, className)}>
            <span>Order</span>
            <div className={styles.productList}>
                {orderedProducts.map((productId) =>
                    <BasketItem key={productId} productId={productId} />)}
            </div>
            {
                productCount !== 0 &&
                <div className={styles.result}>
                    <div>{productCount}</div>
                    <div>{price}$</div>
                </div>
            }
        </div>
    )
}