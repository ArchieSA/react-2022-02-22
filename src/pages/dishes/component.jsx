import styles from './style.module.css';

export const Dishes = ({ menu }) => {
  return (
    <div className={styles.dishes}>
      <h4 className={styles.title}>Our delicious Dishes:</h4>
      <div className={styles.list}>
        <ul>
          {menu.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
};
