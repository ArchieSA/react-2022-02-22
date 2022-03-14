import React from 'react';

class ErrorBoundaryForReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }
      
      componentDidCatch(error, errorInfo) {
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        console.log(error);
      }
      
      render() {
        if (this.state.errorInfo) {
          return <div>
              <h2 style={{ textAlign: 'center' }}>Something went wrong with Rewiews...</h2>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
              </details>
            </div>
        }

        return this.props.children;
      }  
}

export default ErrorBoundaryForReviews;
