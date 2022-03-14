import React from 'react';
import Rate from '../rate/component';
import Menu from '../menu/component';
import Reviews from '../review/component';
import styles from './style.module.css';

const Restourant = ({menu, reviews}) => {
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    const restRating = Math.round(sum / reviews.length);

    return <div>
        <div className={styles.rating}>Рейтинг ресторана: <Rate value={restRating} /></div>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
    </div>
}

export default Restourant;
