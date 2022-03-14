import React from 'react';
import imageError from './img/reviews-error.png'
import styles from './styles.module.css';

export class ReviewsErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <div className={styles.errorcontainer}>
                    <img src={imageError} alt="Не удалось загрузить отзывы" />
                    <div>
                        Не удалось загрузить отзывы
                    </div>
                </div>
            );    
        }
        return this.props.children;
    }
}
