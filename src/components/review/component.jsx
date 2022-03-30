import { Rate } from '../rate/component';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectReviewById } from '../../modules/selectors/review-selectors';
import { selectUserById } from '../../modules/selectors/user-selector';
import React from 'react';

export const Review = ({ reviewId }) => {
    const review = useSelector((state) => selectReviewById(state, reviewId));
    const user = useSelector((state) => selectUserById(state, review.userId));
    return (
        <div className={styles.review}>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.name}>{user.name}</h4>
                    <p className={styles.comment}>{review.text}</p>
                </div>
                <div className={styles.rate}>
                    <Rate value={review.rating} />
                </div>
            </div>
        </div>
    );
}