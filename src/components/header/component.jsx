import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './styles.module.css';
import { Basket } from '../basket/component';
import { Avatar } from '../avatar/avatar';
import { useSelector } from 'react-redux';

export const Header = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      {isLoggedIn && (
        <Avatar
          username={user.username}
          budget={user.budget}
          gender={user.gender}
        />
      )}
      <Basket className={styles.basket} />
    </header>
  );
};
