import React,{useState} from 'react'
import AddTask from './AddTask'

const TodoList = () => {

    const [todos,setTodos] = useState([])

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
    
  return (
    <>
    <h1> To-Do List</h1>
    <h2> My Tasks</h2>
      <AddTask/>
    </>
  )
}

export default TodoList
