import React from 'react';

export default function TodoItem({text, onRemoveTodo: handleClick}) {
    return(
        <li>
            <span>{text} </span>
            <button onClick={handleClick}>Delete</button>
        </li>
    );
}