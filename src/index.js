import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';


// Create the root element for React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside StrictMode for development-related checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// You can track performance by passing a function to reportWebVitals, for example:
// reportWebVitals(console.log); or send to an analytics endpoint.
reportWebVitals();
reportWebVitals(console.log);