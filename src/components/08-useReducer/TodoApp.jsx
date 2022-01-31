import React, { useEffect, useReducer } from 'react';
import todoReducer from './todoReducer';

import './reducer.css';
import useForm from '../../hooks/useForm';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({ description: '' });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length >= 2) {

            const newTodo = {
                id: Date.now(),
                desc: description,
                done: false
            }

            const action = {
                type: 'add',
                payload: newTodo
            }

            dispatch(action);
            reset();
        }
    }

    const handleDelete =  (id) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }

    return (
        <div>
            <h1>TodoApp <small>({todos.length})</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className='list-group list-group-flush'>
                        {todos.map((todo, i) => (
                            <li key={todo.id} className='list-group-item'>
                                <p className='text-center'>{i + 1}. {todo.desc}</p>
                                <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text"
                                name='description'
                                placeholder='Aprender...'
                                autoComplete='off'
                                className='form-control'
                                value={description}
                                onChange={handleInputChange} />
                        </div>

                        <button type='submit' className='btn btn-outline-primary mt-2'>
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
