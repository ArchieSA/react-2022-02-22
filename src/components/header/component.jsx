import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to="/restaurants" >
                <Logo />
            </Link>
            <div className={styles.menu}>
                <Link className={styles.link} to="/products">
                    Products
                </Link>
                <Link className={styles.link} to="/basket">
                    Basket
                </Link>
            </div>
        </header>
    )
};
