import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to="/restaurants" >
                <Logo />
            </Link>
            <Link className={styles.basket} to="/basket">
                Basket
            </Link>
        </header>
    )
};
