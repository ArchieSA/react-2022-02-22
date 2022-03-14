import GoldStarIcon from '../../assets/icons/star-gold.svg';
import GreyStarIcon from '../../assets/icons/star-grey.svg';
import styles from './style.module.css';

const maxRateValue = 5;

export const Rate = ({ rateValue, id }) => {
    const isGoldStar = (index) => index + 1 <= rateValue;
    const starsArray = [...Array(maxRateValue)];

    if (!rateValue || typeof rateValue !== 'number' || rateValue < 0 || rateValue > 5) {
        return <></>;
    }

    return <div className={styles.starsContainer}>
        { 
            starsArray.map((_, index) => 
                <img 
                    src={isGoldStar(index) ? GoldStarIcon : GreyStarIcon}
                    alt={isGoldStar(index) ? 'gold-star' : 'grey-star'} 
                    key={isGoldStar(index) ? id + '-gold-' + index : id + '-grey-' + index}
                    className={styles.starIcon} />
            )
        }
    </div>
}