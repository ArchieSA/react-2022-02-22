import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Basket } from '../basket/component'
import { UserContainer } from '../user/container';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logo}/>
            <UserContainer className={styles.user}/>
            <Basket className={styles.basket}/>
        </header>
    )
};
