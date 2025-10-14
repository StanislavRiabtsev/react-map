import React from "react";

const UserName = (props) => {
    console.log(props);
    return (
        props.userAge > 20 ?
            (<p className="">{props.userName}
                <button onClick={() => props.changeName(props.userId, 'New Name')}>Show Details</button>
            </p>)
            :
            (<p className="">{props.userName} {props.userSurname}</p>)

    );
}

export default UserName;