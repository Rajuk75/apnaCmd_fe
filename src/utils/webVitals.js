export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
export const logPerformance = () => {
  if (typeof window !== "undefined" && window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;
    console.log("🚀 Performance Metrics:");
    console.log(`  Page Load Time: ${pageLoadTime}ms`);
    console.log(`  Connect Time: ${connectTime}ms`);
    console.log(`  Render Time: ${renderTime}ms`);
  }
};
