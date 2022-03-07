import { ReactComponent as Star } from "../../icons/star.svg"
import styles from "./style.module.css"

export const Rate = ({ rating }) => {
  return (
    <div>
      {
        Array(5).fill({}).map((itm, idx) => { // Массив звёздочек постоянен, и idx используется как key
          return <Star key={idx} className={styles.icon} style={idx < rating ? {fill:"#EFCE4A"} : {fill:"#C5C5C5"}}/>;
        })
      }
    </div>
  )
}