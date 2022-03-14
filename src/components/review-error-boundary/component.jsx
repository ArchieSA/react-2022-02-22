import React from 'react';

export class ReviewErrorBoundary extends React.Component {
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
                <div>
                    Не удалось загрузить отзыв
                </div>
            );
        }

        return this.props.children;
    }
}