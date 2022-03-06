import { Review } from "../review/component"

export const Reviews = ({ reviews }) => {
    return (
        <div>
            {
                reviews.map(({id, user, text, rating}) =>
                <Review key={id} name={user} text={text} rating={rating} />)
            }
        </div>
    )
}