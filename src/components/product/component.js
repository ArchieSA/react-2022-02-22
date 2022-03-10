import { useValue } from "../../hooks/use-value";

import styles from "./style.module.css";

export const Product = ({ name, ingredients, price }) => {
    const { value, removeValue, addValue } = useValue(0);

    return <div className={styles.product}>
        <span>{name}</span>
        <div>
        {
            ingredients.map((ingredient) => <span key={ingredient}>{ingredient}</span>)
        }
        </div>
        <span>{price}$</span>
        <div>
            <button className={styles.action} onClick={removeValue}>-</button>
            <span>{value}</span>
            <button className={styles.action} onClick={addValue}>+</button>
        </div>
    </div>
}