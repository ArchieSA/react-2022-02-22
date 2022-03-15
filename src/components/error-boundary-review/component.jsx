import React from "react";
import styles from './styles.module.css';

export class ErrorBoundaryReview extends React.Component {
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
      return <div className={styles.error}>Review error</div>
    }

    return this.props.children;
  }
}

