import React from 'react';
import useForm from '../../hooks/useForm';

const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <input type="text"
                    name='name'
                    placeholder='John Doe'
                    className='form-control'
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group mt-2'>
                <input type="email"
                    name='email'
                    placeholder='example@example.co'
                    className='form-control'
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group mt-2'>
                <input type="password"
                    name='password'
                    placeholder='Contraseña'
                    className='form-control'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary mt-2'>Enviar</button>

        </form>
    );
};

export default FormWithCustomHook;
