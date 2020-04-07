import React from 'react';

const Todo = props => {
    return (
        <div 
        className={`todo${props.item.completed ? ' completed' : ''}`}
        onClick={() => props.toggleItem(props.item.id)}
        >
        <p>{props.item.todo}</p>
        </div>
    );
};

export default Todo;