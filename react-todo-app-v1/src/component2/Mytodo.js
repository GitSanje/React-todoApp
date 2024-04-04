import React, { useState } from 'react'
import TodoForm1 from './TodoForm1'
import Showtodo from './Showtodo'
import './style.css'

const Mytodo = () => {


    const [ todos, setTodos] = useState([])

    const addTodo = (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(todo, ...todos);
        
    }
   
    // const todoslist = todos.map((todo) => 
    //  <li key={todo.id}>
    //   {todo.id}, {todo.text}</li>
    // );
    
    const removeTodo = (id) =>{
      const removeArr = [...todos].filter((todo) => todo.id !== id)
      setTodos(removeArr)
    }
    
    const updateTodo = (id,newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
      }
          setTodos(prev=> prev.map(item=>(item.id === id ? newValue : item)))
          console.log(newValue);
       
    }

    const completeTodo = (id) => {
      let updateTodos = todos.map((todo) => {
         if (todo.id === id){
          todo.isComplete = !todo.isComplete
         }
         return todo
      })

      setTodos(updateTodos)
    }


  return (
    <>
     <h1>What's the Plan for Today?</h1>
     <TodoForm1 onSubmit={addTodo}/>
     <Showtodo todos= {todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
     
      {/* <ul>{todoslist}</ul> */}
      
    </>
  )
}

export default Mytodo
