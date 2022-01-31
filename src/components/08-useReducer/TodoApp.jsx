import React, { useReducer } from 'react';
import todoReducer from './todoReducer';

import './reducer.css';

const initalState = [{
    id: Date.now(),
    desc: 'Aprender react',
    done: false
}]

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initalState);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Date.now(),
            desc: 'Nueva tarea',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
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
                                <button className='btn btn-danger'>
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
                                className='form-control' />
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
