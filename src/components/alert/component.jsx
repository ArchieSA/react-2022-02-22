import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const Alert = ({ type, message }) => {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <strong>{type.toUpperCase()}! </strong>
      {message}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
