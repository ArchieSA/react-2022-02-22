import {IconStar} from "../icons/iconStar";
import styles from "./style.module.css";

export const Rate = ({value, className}) => {
    return (
        <div className={styles.rate + " " + className}>
            {[1, 2, 3, 4, 5].map(i => <IconStar key={i} isFilled={i <= value}/>)}
        </div>
    )
}
