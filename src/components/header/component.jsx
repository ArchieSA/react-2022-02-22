import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Cart from "./img/cart.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to="/restaurants" >
                <Logo />
            </Link>
            <div className={styles.menu}>
                <Link to="/restaurants">
                    Restaurants
                </Link>
                <Link to="/productlist">
                    Product list
                </Link>
            </div>
            <Link className={styles.basket} to="/basket">
                <img className={styles.basketimage} src={Cart} alt="basket" />
            </Link>
        </header>
    )
};
