import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    return(
        <ul className='todo-list'>
            {props.todoList.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggle={props.toggle}/>
                )
            })}
        </ul>
    )
}