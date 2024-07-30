import React, { useState } from 'react'

const TodoItem = ({todo,deleteTodo,doneTodo}) => {
   
  return (
    <div style={{
        width:"100%",
        minHeight:"30px",
        backgroundColor:todo.status=="done"?"green":"lightcoral",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 2px",
        fontSize:"23px",
       
    }}>
        <span>{todo.title}</span>
        <div>
       {
        todo.status=="pending" ? <button onClick={()=>doneTodo(todo.id)} >done</button>
       : <button onClick={()=>deleteTodo(todo.id)}  style={{backgroundColor:"red"}} >delete</button>
       }
        </div>
    </div>
  )
}

export default TodoItem
