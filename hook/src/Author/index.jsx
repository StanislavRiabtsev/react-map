import React from 'react';
import './index.css';

const Author = (props) => {
    return (
        <div className="author">
            <p>Author:{props.name}</p>
        </div>
    );
}

export default Author;