import { Rate } from '../rate/component';
import styles from './style.module.css';
import headerStyles from '../../assets/styles/header.module.css';

export const Reviews = ({ reviewsList }) => {
    return <div className={styles.reviewsContainer}>
        <h3 className={`${headerStyles.header} ${headerStyles.h3}`}>
            Reviews
        </h3>
        <div className={styles.reviewsList}>
            {
                reviewsList.map((review) => 
                    <div 
                        key={review.id}
                        className={styles.review}>
                        <div className={styles.reviewHeader}>
                            <h4 className={`${headerStyles.header} ${headerStyles.h4}`}>
                                { review.user }
                            </h4>
                            <Rate 
                                rateValue={review.rating}
                                id={review.id} />
                        </div>
                        <div className={styles.reviewBody}>
                            { review.text }
                        </div>
                    </div>
                ) 
            }
        </div>
    </div>
}
