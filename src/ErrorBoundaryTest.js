// ErrorBoundaryTest.js
import React, { Component } from 'react';

class ErrorBoundaryTest extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>An error occurred in this component.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundaryTest;