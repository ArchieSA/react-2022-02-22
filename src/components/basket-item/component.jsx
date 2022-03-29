import { useSelector } from 'react-redux';
import { selectProductById } from '../../modules/product/selectors';
import { selectProductCountById } from '../../modules/basket/selectors';
import styles from './styles.module.css';

export const BasketItem = ({ productId }) => {
    const product = useSelector(state => selectProductById(state, productId))
    const count = useSelector(state => selectProductCountById(state, productId))

    return (
        <div key={product.id} className={styles.product}>
            <span className={styles.name}>{product.name}</span>
            <span className={styles.count}>{count}</span>
        </div>
    );
};