import { useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';


function App() {
  const[todo ,setTodo]=useState('')
  const[todos ,setTodos]=useState([])

  const handleSubmit =(e)=>{
     e.preventDefault();
  }

  const addTodo=()=>{
    setTodos([...todos,todo])
    console.log(todos)
  }

  let todo1 =''
  

  return (
    <div className='container'>
      <h2>Todo List</h2>
      <form className='form-group' onSubmit={handleSubmit}>
        <input type="text" value={todo} placeholder='enter your todo'  className='form-control' onChange={(event)=> setTodo(event.target.value)}/>{todo}
        <button>Add</button>
        {/* <Button variant="secondary">add</Button>{' '} */}
      </form>
<div className='list'>
     <ul>
      <li className='form-control' >First</li>
      <li className='form-control'>Second</li>
      <li className='form-control'>Third</li>
     </ul>
     </div>
    </div>
   
  )
}

export default App
