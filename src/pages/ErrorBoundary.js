import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  static componentDidCatch(error, info) {
    console.log(info);
  }
  render() {
    const { hasError } = this.state;
    if (hasError) return <div>Something Went Wrong!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
