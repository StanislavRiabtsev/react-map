import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = "Hello world"

const elem = (
  <div>
    <h2 className='ss'>{text}</h2>
    <label htmlFor=""></label>
    <input type='text' />
    <button tabIndex={0}>Click</button>
  </div>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);
