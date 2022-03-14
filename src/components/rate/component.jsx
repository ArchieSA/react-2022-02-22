import cn from 'classnames';

import { ReactComponent as Star } from '../../icons/star.svg';

import styles from './styles.module.css';

import PropTypes from 'prop-types';

const Rate = ({ value }) => (
    <div>
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={cn(styles.star, { [styles.checked]: i <= value - 1 })}
            />
        ))}
    </div>
);

Rate.propTypes = {
    value: PropTypes.number,
}

Rate.defaultProps = {
    value: 0,
}

export default Rate