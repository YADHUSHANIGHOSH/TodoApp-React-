import { useState } from 'react'
import './App.css'
import Counter from './Counter';

function App() {
    const [count, setCount] = useState(0)
 
  function addCount(){
    setCount(count+1)
    console.log(count);
  }


  return (
 
   <div clssName='App'>
    <button onClick={addCount}>Add</button>
  <Counter count={count} /> 
   </div>

  )
}

export default App
