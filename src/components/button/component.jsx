import styles from './styles.module.css';
import PropTypes from 'prop-types';

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
    icons: PropTypes.shape({
        plus: PropTypes.string,
        minus: PropTypes.string,
    }),
    props: PropTypes.array,
}

export default Button;