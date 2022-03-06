import { Rate } from "../rate/component"

export const Review = ({ id, user, text, rate }) => {
    console.log('rating = ' + rate);
    return (
        <div key={id}>
            <h4>{user}</h4>
            <p>{text}</p>
            <Rate rate={rate}/>
        </div>
    )
}

