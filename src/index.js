import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new API
import './index.css'; // Import the global styles
import App from './App'; // Import the root App component

// Get the root DOM element from index.html
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
