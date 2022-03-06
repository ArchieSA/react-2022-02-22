import { Review } from "../review/component"
import styles from "./style.module.css";

export const Reviews = ({ reviews }) => {
    return (
        <div className={styles.reviews}>
            {
                reviews.map(({ id, user, text, rating }) => {
                    return <Review key={id} user={user} text={text} rate={rating} />
                })
            }
        </div>
    );
}