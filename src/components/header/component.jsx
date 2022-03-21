import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Basket } from '../basket/component'
import { AuthContainer } from '../auth/container';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logo}/>
            <div className={styles.headerRight}>
                <Basket className={styles.basket}/>
                <AuthContainer />
            </div>
        </header>
    )
};
