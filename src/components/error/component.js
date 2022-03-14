import styles from './styles.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ErrorBox = ({ message, className }) => {
    return (
        <div className={classNames(styles.box, className)}>
            <p className={styles.message}>{message}</p>
        </div>
    );
}

ErrorBox.propTypes = {
    message: PropTypes.string,
};


ErrorBox.defaultProps = {
    message: 'Something went wrong...',
};

export default ErrorBox;
