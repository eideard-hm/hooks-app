import React, { useState } from 'react';
import MultipleCustomHooks from '../examples/MultipleCustomHooks';

const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h3>Real Example Ref</h3>
            <hr />

            {show && <MultipleCustomHooks />}


            <button className='btn btn-primary m-2'
                onClick={() => setShow(!show)}>
                Toggle
            </button>
        </div>

    );
};

export default RealExampleRef;
