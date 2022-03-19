import styles from './styles.module.css';

export const Avatar = ({ username, budget, gender }) => {
  const imageSrc = `/images/avatar-icon-${gender}.jpg`;
  return (
    <div className={styles.avatar}>
      <img src={imageSrc} alt="Avatar" className={styles.avatarImg} />
      <h3 className={styles.name}>{username}</h3>
      <p className={styles.budget}>{budget}</p>
    </div>
  );
};
