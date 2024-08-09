import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import AppRouter from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
