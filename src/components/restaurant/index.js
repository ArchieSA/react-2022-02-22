import {Menu} from "../menu/component";
import {Reviews} from "../reviews";
import styles from "./style.module.css";

export const Restaurant = ({name, menu, reviews}) => {
    return (
        <div className={styles.restaurant}>
            <h2>{name}</h2>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </div>
    )
}