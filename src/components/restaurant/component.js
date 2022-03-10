import React from 'react';
import Rate from '../rate/component';
import Menu from '../menu/component';
import Reviews from '../review/component';
import styles from './style.module.css';

const Restourant = ({menu, reviews}) => {
    let sum  = 0;
    for (const rev of reviews) {
        sum += rev.rating;
    }
    const restRating = Math.round(sum / 5);

    return <div>
        <div className={styles.rating}>Рейтинг ресторана: <Rate value={restRating} /></div>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
    </div>
}

export default Restourant;