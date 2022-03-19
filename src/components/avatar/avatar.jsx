import avatarImg from '../../icons/avatar-icon.jpg';
import styles from './styles.module.css';

export const Avatar = ({ username, budget }) => {
  return (
    <div className={styles.avatar}>
      <img src={avatarImg} alt="Avatar" className={styles.avatarImg} />
      <h3 className={styles.name}>{username}</h3>
      <p className={styles.budget}>{budget}</p>
    </div>
  );
};
