import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/app_router';
import './stylesheets/application.css';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<AppRouter />, root);
});
