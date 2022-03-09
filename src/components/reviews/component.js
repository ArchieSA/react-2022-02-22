import { Rate } from "../rate/component";
import styles from "./style.module.css";

export const Reviews = ({ data }) => {
   return <div className={styles.reviews}>
        {
          data.map(({id, user, text, rating}) => 
            <div key={id} className={styles.review}>
                <div className={styles.name}>{user}</div>
                <div className={styles.text}>{text}</div>
                <Rate className={styles.rating} rating={rating} />
            </div>)
        }
     </div>;
}