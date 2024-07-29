import React, { useState } from 'react'

const TodoItem = ({todo,deleteTodo}) => {
    const[done,setDone] =useState(false);
  return (
    <div style={{
        width:"100%",
        height:"30px",
        backgroundColor:done?"green":"lightcoral",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 2px",
        fontSize:"23px",
       
    }}>
        <span>{todo.title}</span>
        <div>
       {
        !done ? <button onClick={()=>setDone(true)} >done</button>
       : <button onClick={()=>deleteTodo(todo.id)}  style={{backgroundColor:"red"}} >delete</button>
       }
        </div>
    </div>
  )
}

export default TodoItem
