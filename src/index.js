import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // For measuring performance
import ShopContextProvider from './context/ShopContext'; // Context provider

// Create a root for React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped with ShopContextProvider
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
