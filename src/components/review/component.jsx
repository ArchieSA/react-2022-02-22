import { Rate } from '../rate/component';
import styles from './styles.module.css';

export const Review = ({ user, text, rating }) => (
    <div className={styles.review} data-testid='review'>
        <div className={styles.content}>
            <div>
                <h4 className={styles.name}>{user}</h4>
                <p className={styles.comment}>{text}</p>
            </div>
            <div className={styles.rate} data-testid='rate'>
                <Rate value={rating} />
            </div>
        </div>
    </div>
);