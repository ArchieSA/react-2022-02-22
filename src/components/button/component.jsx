import PropTypes from 'prop-types';
import styles from './styles.module.css';

const icons = {
    plus: '+',
    minus: '-',
};

const Button = ({ icon, ...props }) => (
    <button className={styles.button} {...props}>
        {icons[icon]}
    </button>
)

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  props: PropTypes.any
}

export { Button };
