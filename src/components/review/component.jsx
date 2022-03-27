import { Rate } from '../rate/component';
import styles from './styles.module.css';
import { useSelector } from "react-redux";
import { selectUserById } from "../../modules/users/selectors";

export const Review = ({ userId, text, rating }) => {
    const user = useSelector(state => selectUserById(state, userId))?.name ?? 'Anonym';
    return (
        <div className={styles.review}>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.name}>{user}</h4>
                    <p className={styles.comment}>{text}</p>
                </div>
                <div className={styles.rate}>
                    <Rate value={rating}/>
                </div>
            </div>
        </div>
    )
};
