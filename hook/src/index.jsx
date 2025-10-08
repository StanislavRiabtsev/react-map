import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import HelloWorldNPM from 'hello-world-npm';

console.log(HelloWorldNPM.helloWorld());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
