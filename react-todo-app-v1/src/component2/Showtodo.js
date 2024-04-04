import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

import TodoForm1 from './TodoForm1';


const Showtodo = ({todos,completeTodo,removeTodo,updateTodo}) => {

  const [edit, setEdit] = useState([{
    id:null,
    text:''
  }])
  console.log(edit);

  const editUpdate = (value) =>{
    updateTodo(edit.id, value)
    setEdit({
      id:null,
      text:''
    })
  }
  
  if(edit.id){
   return <TodoForm1 edit = {edit} onSubmit={editUpdate} />
  }


  return todos.map((todo,index) =>(
    <div key={index} className= {todo.isComplete ?'todo-row complete' : 'todo-row'}>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}> 
          {todo.text}</div>

          <div className='icons' >
            <RiCloseCircleLine
            onClick={()=>removeTodo(todo.id)}
            className='delete-icon'/>
            <TiEdit
            onClick={() => setEdit({id: todo.id, value: todo.text})}
            className='edit-icon' />
            </div>
    </div>

  ))
}

export default Showtodo
