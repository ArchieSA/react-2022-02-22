import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { paths } from '../../test-routing';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to={paths.restaurants.restaurantList} >
                <Logo />
            </Link>
            <Link className={styles.basket} to="/basket">
                Basket
            </Link>
        </header>
    )
};
