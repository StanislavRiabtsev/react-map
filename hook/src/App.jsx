import React from "react";
import UserName from "./UserName";
import Button from "./Button";
import Description from "./Description";

import './index.css';

let USERS = [
    { id: 1, name: 'Alex', surname: 'Smith', age: 25, passportId: 123 },
    { id: 2, name: 'Bob', surname: 'Johnson', age: 30, passportId: 456 },
    { id: 3, name: 'Arnold', surname: 'Williams', age: 15, passportId: 123 },
    { id: 4, name: 'Felix', surname: 'Jones', age: 40, passportId: 101112 },
]

const App = () => {
    const changeName = (id, newName) => {
        USERS.map((user) => {
            if (user.id === id) {
                return {
                    id: user.id,
                    name: newName,
                    surname: user.surname,
                    age: user.age,
                    passportId: user.passportId
                }
            } else {
                return user;
            }
        });
    }
    const data = [];
    USERS.forEach((user, index) => {
        const key = generateKey(user);
        data.push(

            <div key={key}>
                <UserName
                    userName={user.name}
                    userSurname={user.surname}
                    userAge={user.age}
                    changeName={changeName}
                />
                {/* {user.age > 20 ?
                    (<p className="">{user.name}
                        <button>Show Details</button>
                    </p>)
                    :
                    (<p className="">{user.name} {user.surname}</p>)
                } */}
            </div>
        );
    });
    return (
        <div className="">
            {/* {data} */}
            <Button />
            <Description />
        </div>
    );
};

function generateKey(user) {
    return `${user.name}-${user.surname}-${user.age}-${user.passportId}`;
}

export default App;