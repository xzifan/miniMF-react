import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// important: set the root element with id 
const root = ReactDOM.createRoot(document.getElementById('react-micro-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
