import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  return (
    <>
    <h1>Counter</h1>
    <Counter intialCount={0}/>
    <h1>Counter Hooks</h1>
    <CounterHooks  intialCount={0}/>
    </>
  )
}

export default App;
