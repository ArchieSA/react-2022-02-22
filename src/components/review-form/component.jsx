import styles from "./style.module.css";
import classnames from "classnames";
import {useState} from "react";

const ReviewForm = ({ onSubmit, defaultValues }) => {

    const [name, setName] = useState(defaultValues.name);
    const [text, setText] = useState(defaultValues.text);
    const [rating, setRating] = useState(defaultValues.rating);
    const [isError, setIsError] = useState(false);

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeText = (event) => {
        setText(event.target.value);
    }

    const handleChangeRating = (event) => {
        setRating(event.target.value);
    }

    const clearForm = () => {
        setName(defaultValues.name);
        setText(defaultValues.text);
        setRating(defaultValues.rating);
        setIsError(false);
    }

    const handleFocus = () => {
        setIsError(false);
    }

    const handleSubmit = () => {
        if ( name && text ) {
            onSubmit({ name, text, rating });
            clearForm()
        } else {
            setIsError(true);
        }
    }

    return (
        <>
            {isError && <div className={styles.error}>All fields are required!</div>}
            <div className={styles.formField}>
                <label>Name</label>
                <div>
                    <input type="text" value={name} onChange={handleChangeName} onFocus={handleFocus} />
                </div>
            </div>
            <div className={styles.formField}>
                <label>Rating</label>
                <div>
                    <select value={rating} onChange={handleChangeRating}>
                        {[1, 2, 3, 4, 5].map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                </div>
            </div>
            <div className={styles.formField}>
                <label>Review</label>
                <div>
                    <textarea value={text} onChange={handleChangeText} onFocus={handleFocus} rows={6} />
                </div>
            </div>
            <div className={styles.formField}>
                <button
                    className={classnames(styles.btnPrimary, styles.btn)}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </>
    );
}
ReviewForm.defaultProps = {
    defaultValues : {
        name : '',
        text : '',
        rating : '1'
    }
}

export {ReviewForm}

