import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback(() => setCounter(c => c + 1), [setCounter]);

    return (
        <div>
            <h3>Callback - Counter : <small>{counter}</small> </h3>
            <hr />

            <ShowIncrement increment={increment} />
        </div>
    );
};

export default CallbackHook;
