import styles from './styles.module.css';
import classnames from 'classnames';

const icons = {
  plus: '+',
  minus: '-',
  clear: '\uD83D\uDDD1️',
  login: 'Login',
  logout: 'Logout',
};

export const Button = ({ icon, className, ...props }) => (
  <button className={classnames(styles.button, styles[className])} {...props}>
    {icons[icon]}
  </button>
);
