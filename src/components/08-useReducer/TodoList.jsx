import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodo, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => (
                <TodoListItem todo={todo}
                              i={i}
                              toggleTodo={toggleTodo}
                              handleDelete={handleDelete}
                              key={todo.id} />
            ))}
        </ul>
    );
};

export default TodoList;
