import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { HELLO } from './Folder/hello';
import { HOOP } from './Folder/index';
import { TEST1, TEST2 } from './test';
import Dog from './Dog.jpg';
import './index.css';

console.log(TEST1, TEST2);

console.log(HELLO);
console.log(HOOP);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <div className='back'>
        <img src={Dog} alt="dog" />
        <App />
    </div>
</React.StrictMode>);
