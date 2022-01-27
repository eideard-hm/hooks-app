import React, { useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';

const Memorize = () => {

  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <div>
      <h3>Counter: <Small value={counter} /></h3>

      <button className='btn btn-primary' onClick={increment}> +1 </button>
      <button className='btn btn-outline-secondary ms-2' onClick={() => setShow(!show)}> Show / Hide { JSON.stringify(show) } </button>
    </div>
  );
};

export default Memorize;
