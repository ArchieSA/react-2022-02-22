import React from "react";
import styles from './styles.module.css';

export class ErrorBoundaryReviews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    return console.log(error);
  }

  render() {
    if(this.state.hasError) {
      return <div className={styles.error}>Sorry, no reviews available</div>
    }

    return this.props.children;
  }
}

