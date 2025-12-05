export const logError = (error, errorInfo = null, context = '') => {
    if (process.env.NODE_ENV === 'development') {
        console.group(`Error ${context ? `in ${context}` : ''}`);
        console.error('Error:', error);
        if (errorInfo) {
            console.error('Error Info:', errorInfo);
        }
        console.error('Stack:', error.stack);
        console.groupEnd();
    } else {
        console.error('Error occurred:', error.message);
    }
};

export const logWarning = (message, data = null) => {
    if (process.env.NODE_ENV === 'development') {
        console.warn('Warning:', message, data);
    }
};

export const logInfo = (message, data = null) => {
    if (process.env.NODE_ENV === 'development') {
        console.info('ℹInfo:', message, data);
    }
};
