import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
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
            return this.props.altComponent;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    altComponent : PropTypes.node
};
ErrorBoundary.defaultProps = {
    altComponent : <h1>Has Error!</h1>
};

export {ErrorBoundary}