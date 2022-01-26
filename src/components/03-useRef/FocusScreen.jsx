import React, { useRef } from 'react';

const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h3 className='text-center'>Focus Screen</h3>

            <input type="text"
                ref={inputRef}
                className='form-control mb-3'
                placeholder='Nombre'
                id='focus'
            />

            <button className='btn btn-outline-primary'
                onClick={handleClick}>
                Focus
            </button>
        </div>
    );
};

export default FocusScreen;
