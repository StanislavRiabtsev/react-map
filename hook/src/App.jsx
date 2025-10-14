import React from "react";

import './index.css';

const USERS = [
    { id: 1, name: 'Alex', surname: 'Smith', age: 25, passportId: 123 },
    { id: 2, name: 'Bob', surname: 'Johnson', age: 30, passportId: 456 },
    { id: 3, name: 'Arnold', surname: 'Williams', age: 35, passportId: 123 },
    { id: 4, name: 'Felix', surname: 'Jones', age: 40, passportId: 101112 },
]

const App = () => {
    return (
        <div>
            {USERS.map((user, index) => {
                const key = generateKey(user);
                console.log(key);
                return (
                    <div key={key}>
                        <p>{user.name}</p>
                    </div>
                )
            })}
        </div>
    );
};

function genereateKey(user) {
    return `${user.name}-${user.surname}-${user.age}-${user.passportId}`;
}

export default App;