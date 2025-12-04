import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const RouteWrapper = ({ children }) => {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
};

export default RouteWrapper;
