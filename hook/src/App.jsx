import React from "react";
import './index.css';

const App = () => {
    const name = 'Stanislav';
    const age = 36;

    let atr;

    if (age === 36) {
        atr = 'good';
    } else {
        atr = 'bad';
    }

    function test() {
        return 'hello';
    }

    return <h1 className={atr}>
        Hello World {name}, you are {age} years old.
        <div className="div">
            {age === 36 ? 'You are good' : 'You are bad'}
            <br />
            {test()}
        </div>
    </h1>;
};

export default App;