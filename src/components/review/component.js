import { Rate } from "../rate/component"
import styles from "./style.module.css"

export const Review = ({ user, text, rating }) => {
  return (
    <div className={styles.review}>
      <div className={styles.user}>{user}</div>
      <Rate rating={rating} />
      <div className={styles.text}>{text}</div>
    </div>
  )
}