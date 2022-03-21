import styles from './styles.module.css';
import {getAge} from "./utils";
import PropTypes from 'prop-types';

const UserPanel = ({isAuthorized, data}) => {

    return (
        isAuthorized &&
        <div className={styles.root}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.gender}>{data.gender}</div>
            <div className={styles.age}>age: {getAge(new Date(data.birthday), new Date())}</div>
        </div>
    );
}

UserPanel.propTypes = {
    isAuthorized: PropTypes.bool,
    data: PropTypes.shape({
        id : PropTypes.string,
        name : PropTypes.string,
        male : PropTypes.oneOf(['male', 'female', 'over']),
        birthday : PropTypes.string
    })
}

export {UserPanel};