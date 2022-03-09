import { Product } from '../product/component';
import styles from './style.module.css';

export const Menu = ({ menu }) => {
    return (
        <div className={styles.menu}>
            {
                menu.map(({ id, name, ingredients, price }) => 
                <Product key={id} name={name} ingredients={ingredients} price={price} />)
            }
        </div>
    );
}