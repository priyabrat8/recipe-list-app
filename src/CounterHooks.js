import React,{useState,useContext} from 'react';
import { ThemeContext } from './App';

function CounterHooks({intialCount}) {
    const [count,setCount] = useState(intialCount)
    const style = useContext(ThemeContext)
    return (
        <div>
            <button style={style} onClick = {() => setCount(prevState => prevState - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick = {() => setCount(prevState => prevState + 1)}>+</button>
          </div>
    )
}

export default CounterHooks;