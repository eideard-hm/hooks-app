import React, { useEffect, useReducer } from 'react';
import todoReducer from './todoReducer';

import './reducer.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (id) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }

    const toggleTodo = (id) => {
        dispatch({
            type: 'done',
            payload: id
        });
    }

    const handleAdd = (newTodo = {}) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div>
            <h1>TodoApp <small>({todos.length})</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}
                              toggleTodo={toggleTodo}
                              handleDelete={handleDelete}/>
                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <AddTodo handleAdd={handleAdd}/>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
