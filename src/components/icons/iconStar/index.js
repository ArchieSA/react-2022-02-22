import styles from "./style.module.css";

export const IconStar = ({isFilled}) => {
    let className = styles.icon;
    if (isFilled) {
        className += ' ' + styles.iconFilled;
    }
    return (
        <span className={className} />
    )
}