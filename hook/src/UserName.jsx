import React from 'react';

const UserName = (props) => {
    const onClick = (event) => {
        props.changeName(props.userId, 'Admin');
    }
    return (
        props.userAge > 20 ? (
            <p className='hfueiqfheq'>
                {props.userName}
                <button onClick={onClick}>
                    changeName
                </button>

                {/* <button onClick={props.changeName(props.userId, 'Changed')}>
                    changeName
                </button> */}
            </p>
        ) : (
            <p className='hfueiqfheq'>{props.userName} {props.userSurname}</p>
        )
    );
};

export default UserName;