import styles from './styles.module.css';

const icons = {
  plus: '+',
  minus: '-',
  clear: '\uD83D\uDDD1️',
};

export const Button = ({ icon, ...props }) => (
  <button className={styles.button} {...props}>
    {icons[icon]}
  </button>
);
