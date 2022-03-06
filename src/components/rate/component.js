import styles from "./style.module.css";
import { ReactComponent as StarIcon } from '../../icons/star.svg'

export const Rate = ({ value }) => {
    const fillColor = '#fc0';
    const emptyColor = '#ededed';
    let stars = new Array;

    for (let i = 1; i <= 5; i++) {
        stars[i] = i <= value ? fillColor : emptyColor;
    }

    return (
        <div className={styles.rating} >  
            {
                stars.map((color, index) => 
                <StarIcon key={index} fill={color} />)
            }
            <span>
            {value.toFixed(1)}
            </span>
            
        </div>
    );
}