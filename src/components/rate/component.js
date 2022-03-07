import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'

import styles from "./style.module.css";

export const Rate = ({ rateValue }) => {
    if (rateValue < 1 || rateValue > 5) {
        return <p>No rating available</p>
    }
    return [...Array(5)].map((_, i) => {
        return <StarIcon key={i} className={i <= Math.round(rateValue) - 1 ? styles.star_gold : styles.star_grey} />
    })
}



// return (
//     <svg fill="gold" width="20" >
//         <use xlinkHref="../../assets/icons/sprite.svg#star"></use>
//     </svg>
// )
