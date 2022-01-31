import React from 'react';
import useForm from '../../hooks/useForm';

const AddTodo = ({handleAdd}) => {

    const [{ description }, handleInputChange, reset] = useForm({ description: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length >= 2) {

            const newTodo = {
                id: Date.now(),
                desc: description,
                done: false
            }
            handleAdd(newTodo)
           
            reset();
        }
    }

    return (
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
    );
};

export default AddTodo;
