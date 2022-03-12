import styles from './styles.module.css';
import PropTypes from 'prop-types';

const icons = {
  plus: '+',
  minus: '-',
};

export const Button = ({ icon, ...props }) => (
  <button className={styles.button} {...props}>
    {icons[icon]}
  </button>
);

Button.propTypes = {
  icon: PropTypes.string.isRequired,
};
