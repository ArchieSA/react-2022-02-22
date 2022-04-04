import React from 'react';
import { Review } from '../review/component';
import styles from './styles.module.css';

export const Reviews = ({ reviews }) => {
    return (
        <div className={styles.reviews}>
            {reviews.map((review) => (
                <Review key={review.id} {...review} />
            ))}
        </div>
    );
};
