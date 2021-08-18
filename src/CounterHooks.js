import React,{useState} from 'react';

function CounterHooks({intialCount}) {
    const [count,setCount] = useState(intialCount)
    return (
        <div>
            <button onClick = {() => setCount(prevState => prevState - 1)}>-</button>
            <span>{count}</span>
            <button onClick = {() => setCount(prevState => prevState + 1)}>+</button>
          </div>
    )
}

export default CounterHooks;