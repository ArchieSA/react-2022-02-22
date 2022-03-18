import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <span>Test ME</span>
        </header>
    )
};
