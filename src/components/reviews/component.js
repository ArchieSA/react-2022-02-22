import { Review } from "../review/component"

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(({ id, user, text, rating }) => <Review key={id} user={user} text={text} rating={rating} />)}
    </div>
  )
}