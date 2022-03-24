import { useSelector } from 'react-redux';
import {
  selectPriceByProductId,
  selectProductById,
} from '../../modules/selectors/product-selectors';
import { selectProductCountById } from '../../modules/selectors/basket-selectors';
import styles from './styles.module.css';

export const BasketItem = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));
  const count = useSelector((state) =>
    selectProductCountById(state, productId)
  );
  const price = useSelector((state) =>
    selectPriceByProductId(state, productId)
  );

  return (
    <div key={product.id} className={styles.product}>
      <span>{product.name}</span>
      <span>{count}</span>
      <span>{price} $</span>
    </div>
  );
};
