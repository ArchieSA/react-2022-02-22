import PropTypes from 'prop-types';
import { Review } from '../review/component';
import styles from './styles.module.css';
import {ErrorBoundary} from "../error-boundary/component";
import {Alert} from "../alert/component";

const Reviews = ({ reviews }) => {

    const reviewError = <Alert
        title={"Error!"}
        text={"Review on moderation"}
        variant={"error"}
    />;

    return (
        <div className={styles.reviews}>
            {reviews.map((review) => (
                <ErrorBoundary key={review.id} altComponent={reviewError}>
                    <Review {...review} />
                </ErrorBoundary>
            ))}
        </div>
    );
};
Reviews.propTypes = {
    reviews : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string,
    }))
}

export {Reviews}