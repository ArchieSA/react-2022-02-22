import styles from './styles.module.css';
import {ReviewContainer} from "../review/container";

export const Reviews = ({ reviews }) => {
    return (
        <div className={styles.reviews}>
            {reviews.map((reviewId) => (
                <ReviewContainer key={reviewId} reviewId={reviewId} />
            ))}
        </div>
    );
};
