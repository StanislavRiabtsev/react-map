import React, { useState } from 'react';
import Children from './Children';

import './index.css';

const App = () => {

    const [state, setState] = useState(false);
    const [count, setCount] = useState(0);


    const onHandlerClick = () => {
        setState((currentState) => !currentState);
    };


    const countHandler = () => {
        setCount((value) => value + 1);
    }

    return (
        <div>
            <button onClick={countHandler}>+</button>
            <button onClick={onHandlerClick}>Switch</button>
            {state && <Children count={count} />}
        </div>
    );
};

export default App;