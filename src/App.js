import React, {useState} from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext()

function App() {
  const [theme,setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}} >
    <h1>Counter</h1>
    <Counter intialCount={0}/>
    <h1>Counter Hooks</h1>
    <CounterHooks  intialCount={0}/>
    <button onClick={() => setTheme(preveTheme => preveTheme === 'red' ? 'blue' : 'red' )}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
