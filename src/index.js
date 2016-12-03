import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './stylesheets/application.css'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
