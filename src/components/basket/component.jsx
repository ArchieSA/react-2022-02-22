import classnames from 'classnames';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

export const Basket = ({ className }) => {
    
    const loginStatus = useSelector( state => state.login.isLogin )

    const productCount = useSelector(
        state => Object.keys(state.basket).reduce((acc, productName) => acc + state.basket[productName], 0)
    );

    return (
        <div className={classnames(styles.root, className)}>
            {productCount}
        </div>
    )
}