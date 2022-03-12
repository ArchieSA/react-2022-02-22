import styles from './styles.module.css';
import cn from "classnames";
import PropTypes from 'prop-types';

const Alert = ({title, text, variant}) => {
    return (
        <div className={cn(styles.alert, styles[variant])}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>
    );
}

Alert.propTypes = {
    title : PropTypes.string,
    text : PropTypes.node,
    variant: PropTypes.oneOf(['success', 'error', 'default', 'info'])
}

Alert.defaultProps = {
    variant : "default"
}

export {Alert}