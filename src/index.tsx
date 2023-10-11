import React from 'react';
import ReactDOM from 'react-dom/client';

// Импорт стилей CSS
import './index.css';
import reportWebVitals from './reportWebVitals';

// Импорт App
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
