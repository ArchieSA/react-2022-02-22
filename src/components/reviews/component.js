import { Review } from '../review/component';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Reviews</h2>
      {reviews.map(({ id, rating, user, text }) => (
        <Review key={id} user={user} rating={rating} text={text} />
      ))}
    </div>
  );
};
