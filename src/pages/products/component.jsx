import {joinIngredients} from '../../components/product/utils'
import styles from './styles.module.css'

export function Products({ products }) {
    return (
        <div>
            <div className={styles.content}>
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <h4 className={styles.title}>{product.name}</h4>
                            <p className={styles.description}>Ingredients: {joinIngredients(product.ingredients)}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}