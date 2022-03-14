import React from 'react';
import ErrorBox from '../error/component'
import styles from './styles.module.css';
import classNames from 'classnames';
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: this.props.errorMessage,
            className: this.props.className,
         };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorBox message={this.state.errorMessage} className={classNames(styles.bg, this.state.className)} />;
        }
        return this.props.children;
    }
}
