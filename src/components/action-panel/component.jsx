import { Button } from '../button/component';
import styles from './styles.module.css';
import { users } from '../../fixtures';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { userLogin, userLogout } from '../../modules/actions/user-actions';

export const ActionPanel = () => {
  const user = users[0]; // hardcoded user: 0 - Jessica, 1 - Steven
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const changeLoginState = useCallback(() => {
    dispatch(
      isLoggedIn
        ? userLogout()
        : userLogin(user.username, user.budget, user.gender)
    );
  }, [isLoggedIn, user.username, user.budget, user.gender]);

  return (
    <div className={styles.panel}>
      <Button
        icon={isLoggedIn ? 'logout' : 'login'}
        className="button-large"
        onClick={changeLoginState}
      />
    </div>
  );
};
