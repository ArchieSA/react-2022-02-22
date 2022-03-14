import styles from "./style.module.css";
import Button  from '../button/component';
import useValue from "../../hooks/use-value";
import PropTypes from 'prop-types';

const Product = ({ product }) => {
    const {amount, decrement, increment} = useValue(0);
    return <div className={styles.product}>
        <div className={styles.content}>
            <div>
                <h4 className={styles.title}>{product.name}</h4>
                <p className={styles.description}>{product.ingredients.join(', ')}</p>
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

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        ingredients: PropTypes.array,
    }),
}

export default Product