import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Settings from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Settings.placesCount} />
  </React.StrictMode>
);
