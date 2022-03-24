import { useSelector } from 'react-redux';
import { selectUserById } from '../../modules/selectors/users-selectors';
import { Rate } from '../rate/component';
import styles from './styles.module.css';

export const Review = ({ review }) => {
    const { userId, text, rating } = review;
    const user = useSelector(state => selectUserById(state, userId));
    
    return (
        <div className={styles.review}>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.name}>{user.name}</h4>
                    <p className={styles.comment}>{text}</p>
                </div>
                <div className={styles.rate}>
                    <Rate value={rating} />
                </div>
            </div>
        </div>
    );
}