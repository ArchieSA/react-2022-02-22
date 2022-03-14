import { Rate } from '../rate/component';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const Review = ({ user, text, rating }) => {
    try {
        if (user && text && rating)
        return (
        <div className={styles.review}>
        <div className={styles.content}>
            <div>
                <h4 className={styles.name}>{user}</h4>
                <p className={styles.comment}>{text}</p>
            </div>
            <div className={styles.rate}>
                <Rate value={rating} />
            </div>
        </div>
    </div>
    )
    } catch (error) {
        console.log('error in Review')
    }
    
};

Review.propTypes = {
    review: PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string,
        rating: PropTypes.number.isRequired 
    })
};

Review.defaultProps = {
    product: {
        user: 'Anonymous',
        text: '',
        rating: 0 
    },
};
