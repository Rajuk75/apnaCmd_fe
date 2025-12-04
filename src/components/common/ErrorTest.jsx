import { useState } from 'react';
const ErrorTest = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Test Error: This is a simulated error for testing Error Boundary!');
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setShouldThrow(true)}
        className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors shadow-lg"
      >
        Test Error Boundary
      </button>
    </div>
  );
};

export default ErrorTest;
