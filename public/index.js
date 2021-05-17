import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App'
import Register from '../../Register';



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);



