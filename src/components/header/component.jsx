import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Basket } from '../basket/component'
import { Login } from '../login/component'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo className={styles.logo}/>
            <div className={styles.login}>
                <Login className={styles.login} value='login' />
                <Basket />
            </div>
        </header>
    )
};
