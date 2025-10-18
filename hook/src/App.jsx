import React, { useState } from 'react';

import './index.css';

const App = () => {
    // const [isDark, setIsDark] = useState(true);


    // // let isDark = true

    // const onClickHandler = () => {
    //     // isDark = false
    //     setIsDark(!isDark);
    // }

    // return (
    //     <div className={isDark ? 'dark' : 'light'}>
    //         test
    //         <button onClick={onClickHandler}>Toggle theme</button>
    //     </div>
    // );

    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');

    const [data, setData] = useState({ name: '', password: '' });

    const onChangeName = (event) => {
        // setName(event.target.value);
        setData({ ...data, name: event.target.value, password: data.password });
    }
    const onChangePassword = (event) => {
        // setPassword(event.target.value);
        setData({ ...data, password: event.target.value });
    }

    return (
        <div>
            <input type="text" onChange={onChangeName} />
            <input type="password" onChange={onChangePassword} />

            <p>Name: {data.name}</p>
            <p>Your password: {data.password}</p>
        </div>
    );
};

export default App;