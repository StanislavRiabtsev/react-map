import React from "react";
import './index.css';


const App = () => {
    const onClickHandler = (event) => {
        console.log('click', event);
    }

    const onChangeHandler = (event) => {
        console.log('change', event.target.value);
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log("Submit");
        }}>
            Test
            <input type="text" onChange={onChangeHandler} />
            <button onClick={onClickHandler}>Click Me</button>
        </form>
    );
};

export default App;