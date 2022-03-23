import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import {
  selectProductCount,
  selectOrderedProductIds,
  selectTotalPrice,
} from '../../modules/selectors/basket-selectors';
import { BasketItem } from '../basket-item/component';

export const Basket = ({ className }) => {
  const productCount = useSelector(selectProductCount);
  const orderedProducts = useSelector(selectOrderedProductIds);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className={classnames(styles.root, className)}>
      <span>Order</span>
      <div className={styles.productList}>
        {orderedProducts.map((productId) => (
          <BasketItem key={productId} productId={productId} />
        ))}
      </div>
      {orderedProducts.length > 0 ? (
        <div className={styles.result}>
          <span>Total</span>
          <span>{productCount}</span>
          <span>{totalPrice} $</span>
        </div>
      ) : (
        <p>Empty!</p>
      )}
    </div>
  );
};
