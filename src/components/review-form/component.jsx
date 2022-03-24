//import styles from './styles.module.css';

export const ReviewForm = ({onSubmit}) => {
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                />
            </div>
            <div>
                <label htmlFor="review">Review</label>
                <textarea
                id="review"
                name="review"
                />
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <input
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="5"
                step="1"
                />
            </div>
            <button type="submit">Send review</button>
        </form>
    );
}