import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';

const Header = () => (
    <header className={styles.header}>
        <Logo />
    </header>
);

export default Header;