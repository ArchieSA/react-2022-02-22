import styles from "./style.module.css";
import {Rate} from "../rate";

export const Review = ({user, rating, text}) => {
    return (
        <div className={styles.review}>
            <div className={styles.userName}>{user} <Rate value={rating} className={styles.rating} /></div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}