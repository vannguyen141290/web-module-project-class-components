import React from 'react';

export default function Todo(props) {
    const handleClickToggle = () => {
        props.toggle(props.todo.id)
    }


    return (
        <li className='todo-card' onClick={handleClickToggle}>
            <div className={`todo${props.todo.completed ? ' completed' : ''}`}>{props.todo.task}</div>
        </li>
    )
}

