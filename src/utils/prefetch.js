export const prefetchComponent = (importFn) => {
    const component = importFn();
    return component;
};
export const prefetchOnHover = (importFn) => {
    let prefetched = false;

    return () => {
        if (!prefetched) {
            prefetched = true;
            importFn();
        }
    };
};
export const prefetchOnIdle = (importFn, timeout = 2000) => {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => importFn(), { timeout });
    } else {
        setTimeout(() => importFn(), timeout);
    }
};
export const prefetchOnVisible = (element, importFn) => {
    if (!element || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    importFn();
                    observer.disconnect();
                }
            });
        },
        { rootMargin: '50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
};
