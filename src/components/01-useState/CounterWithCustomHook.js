import React from 'react';
import useCounter from '../../hooks/useCounter';

const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <>
            <h4 className='text-center'>Counter with Hook: {state}</h4>
            <hr />

            <button className='btn btn-primary m-2'
                    onClick={() => increment(2)}>
                +1
            </button>
            <button className='btn btn-info m-2'
                    onClick={reset}>
                Reset
            </button>
            <button className='btn btn-secondary m-2'
                    onClick={() => decrement(2)}>
                -1
            </button>
        </>
    );
};

export default CounterWithCustomHook;
