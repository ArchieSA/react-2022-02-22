import { Button } from '../button/component';
import styles from './styles.module.css';
import { user } from '../../fixtures';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { userLogin, userLogout } from '../../modules/actions/user-actions';

export const ActionPanel = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const changeLoginState = useCallback(() => {
    dispatch(isLoggedIn ? userLogout() : userLogin(user.username, user.budget));
  }, [isLoggedIn]);

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
