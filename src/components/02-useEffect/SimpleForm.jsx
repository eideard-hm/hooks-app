import React, { useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('useEffect');
    }, []);

    const handleInputChange = ({target: {name, value}}) => {
        setFormState({...formState, [name]: value})
    }

    return (
        <>
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

            <br />

            {(name === '123') && <Message />}

        </>
    );
};

export default SimpleForm;
