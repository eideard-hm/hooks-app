import React from 'react';

const TodoListItem = ({todo, i, toggleTodo, handleDelete}) => {
    return (
        <li className='list-group-item'>
            <p className={`${todo.done && 'complete'}`}
                onClick={() => toggleTodo(todo.id)}>
                {i + 1}. {todo.desc}
            </p>

            <button className='btn btn-danger'
                onClick={() => handleDelete(todo.id)}>
                Delete
            </button>
        </li>
    );
};

export default TodoListItem;
