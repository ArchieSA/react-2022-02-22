import { Review } from '../review/component';

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(({ id, rating, user, text }) => (
          <Review key={id} user={user} rating={rating} text={text} />
        ))
      ) : (
        <p style={{ margin: '10px' }}>No reviews</p>
      )}
    </div>
  );
};
