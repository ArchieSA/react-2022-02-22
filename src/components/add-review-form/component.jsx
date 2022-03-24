import styles from './styles.module.css';
import { useState } from 'react';

export const AddReviewForm = ({ addReviewToRestaurant }) => {
  const defaultName = '';
  const defaultText = '';
  const defaultRating = 5;

  const [name, setName] = useState(defaultName);
  const [rating, setRating] = useState(defaultRating);
  const [reviewText, setReviewText] = useState(defaultText);

  const clearFields = () => {
    setName(defaultName);
    setRating(defaultRating);
    setReviewText(defaultText);
  };

  const submitForm = (event) => {
    event.preventDefault();
    addReviewToRestaurant(name, rating, reviewText);
    clearFields();
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <label>
        Enter your name:
        <input
          type="text"
          className={styles.input}
          placeholder="Your name..."
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Select rating:
        <input
          type="number"
          className={styles.input}
          min="1"
          max="5"
          required
          value={rating}
          onChange={(event) => setRating(+event.target.value)}
        />
      </label>
      <label>
        Leave your review here:
        <textarea
          id="text"
          className={styles.textarea}
          required
          value={reviewText}
          onChange={(event) => setReviewText(event.target.value)}
        />
      </label>

      <input type="submit" value="Publish" className={styles.button} />
    </form>
  );
};
