import GoldStarIcon from '../../assets/icons/star-gold.svg';
import GreyStarIcon from '../../assets/icons/star-grey.svg';
import styles from './style.module.css';

const maxRateValue = 5;

export const Rate = ({ rateValue, id }) => {
    const goldStar = (index) => <img alt="gold-star" key={id + '-gold-' + index} src={GoldStarIcon} className={styles.starIcon} />;
    const greyStar = (index) => <img alt="grey-star" key={id + '-grey-' + index} src={GreyStarIcon} className={styles.starIcon} />;
    const starsArray = [...Array(maxRateValue)];

    if (!rateValue || typeof rateValue !== 'number' || rateValue < 0 || rateValue > 5) {
        return <></>;
    }

    return <div className={styles.starsContainer}>
        { starsArray.map((_, index) => index + 1 <= rateValue ? goldStar(index) : greyStar(index)) }
    </div>
}