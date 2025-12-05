export const debounce = (func, wait = 300) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
export const throttle = (func, wait = 300) => {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), wait);
        }
    };
};
export const rafThrottle = (func) => {
    let rafId = null;
    return function executedFunction(...args) {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
            func(...args);
            rafId = null;
        });
    };
};
export const memoize = (func) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
};
