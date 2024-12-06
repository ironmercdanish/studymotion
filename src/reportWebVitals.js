const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Using an array to iterate over the vitals functions
        [getCLS, getFID, getFCP, getLCP, getTTFB].forEach(fn => fn(onPerfEntry));
      })
      .catch((error) => {
        console.error('Error loading web-vitals:', error);
      });
  }
};

export default reportWebVitals;
