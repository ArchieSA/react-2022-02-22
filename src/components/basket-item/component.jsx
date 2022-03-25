import styles from './styles.module.css';

export const BasketItem = ({ product, count }) => {
    return (
        <div key={product.id} className={styles.product}>
            <span className={styles.name}>{product.name}</span>
            <span className={styles.count}>{count}</span>
        </div>
    );
};