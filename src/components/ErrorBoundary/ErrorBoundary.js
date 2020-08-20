import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <h1 className="title">Error</h1>
          <span className="error">
            An Error has ocurred. Please go to Home Page
          </span>
        </React.Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
