import { ReviewContainer } from '../review/container';
import styles from './styles.module.css';

export const Reviews = ({ reviews }) => {

    return (
        <div className={styles.reviews}>
            {reviews.map((reviewId) => (
                <ReviewContainer key={reviewId} reviewId={reviewId} />
            ))}
        </div>
    );
};
