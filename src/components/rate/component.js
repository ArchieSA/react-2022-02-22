import YellowStar from "../../icons/star-symbol-yellow.svg"
import GreyStar from "../../icons/star-symbol-grey.svg"

export const Rate = ({ rate }) => {
    const MAXRATE = 5;
    const rateArray = Array.from({length: MAXRATE}, (item, index) => index < rate ? 1 : 0)
    return <div>
         {
            rateArray.map((item, index) => {
                return (
                    // the order of items never changes, so that index can be used as a key
                    <img key={index} src={item ? YellowStar : GreyStar} alt="*" width="20px"/>
                )
            })
        }   
    </div>
}