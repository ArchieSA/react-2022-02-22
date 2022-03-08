import GoldStarIcon from '../../assets/icons/star-gold.svg';
import GreyStarIcon from '../../assets/icons/star-grey.svg';
import styles from './style.module.css';

const maxRateValue = 5;

export const Rate = ({ rateValue }) => {
    const goldStar = <img alt="gold-star" src={GoldStarIcon} className={styles.starIcon}/>;
    const greyStar = <img alt="grey-star" src={GreyStarIcon} className={styles.starIcon}/>;
    const starsArray = [...Array(maxRateValue)];

    if (typeof rateValue !== 'number' || !rateValue || rateValue < 0 || rateValue > 5) {
        return <div>Oops! There's no valid rate value for this restourant. Try again later.</div>
    }

    return <div className={styles.starsContainer}>
        { starsArray.map((_, index) => index + 1 <= rateValue ? goldStar : greyStar) }
    </div>
}