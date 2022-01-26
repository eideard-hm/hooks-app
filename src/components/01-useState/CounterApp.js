import React, { useState } from 'react';
import CounterWithCustomHook from './CounterWithCustomHook';

const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2 } = state;

    const handleCounter = () => {
        setState({
            ...state,
            counter1: counter1 + 1
        });
    }

    return (
        <>
            <h4>Counter1: {counter1}</h4>
            <h4>Counter2: {counter2}</h4>
            <hr />
            <button className='btn btn-primary'
                onClick={handleCounter}>
                +1
            </button>

            <br />
            <br />
            <br />
            <hr />
            <CounterWithCustomHook />
        </>
    )
};

export default CounterApp;
