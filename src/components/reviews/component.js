import styles from './style.module.css';
import headerStyles from '../../assets/styles/header.module.css';
import { Review } from './components/review/component';

export const Reviews = ({ reviewsList }) => {
    return <div className={styles.reviewsContainer}>
        <h3 className={`${headerStyles.header} ${headerStyles.h3}`}>
            Reviews
        </h3>
        <div className={styles.reviewsList}>
            { reviewsList.map((review) => <Review review={review} />) }
        </div>
    </div>
}
