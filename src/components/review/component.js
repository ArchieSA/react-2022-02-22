import React from 'react';
import styles from './style.module.css';
import Rate from '../rate/component';


const Review = ({reviews}) => {
    return <div>
        <div className={styles.title}>Отзывы</div>
        {
            reviews.map(({ id, user, text, rating }) => {
                return <div key={id} className={styles.body}>
                    <div>{user}</div>
                    <div>{text}</div>
                    <div>Rating: <Rate value={rating} /></div>
                </div>
            })
        }
    </div>
}

export default Review;