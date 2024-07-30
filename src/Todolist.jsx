import React, { useState } from 'react'
import TodoItem from './TodoItem';
import { tododata } from './data';

const Todolist = () => {

    const[todos,setTodos] =useState(JSON.parse(localStorage.getItem("tododata")));
    const[inpt,setInpt] =useState("");

    function addTodo(){
     
        let newTodos = [];

        for(let i =0;i<todos.length;i++){
            newTodos.push(todos[i]);
        }


        let length = todos.length;



        let obj ={
            id:todos[length-1].id+1,
            title:inpt,
            status:"pending"
        }

        newTodos.push(obj);

        
        setTodos(newTodos)
        localStorage.setItem("tododata",JSON.stringify(newTodos));

    }



    function deleteTodo(id){
          let newTodos=[];

          for(let i=0;i<todos.length;i++){
            if(todos[i].id!=id){
                newTodos.push(todos[i]);
            }
          }

          setTodos(newTodos);

          localStorage.setItem("tododata",JSON.stringify(newTodos));
    }

    function doneTodo(id){
      let newTodos=[];
      for(let i=0;i<todos.length;i++){
        if(todos[i].id!=id){
           newTodos.push(todos[i]);
        }
        else{
           todos[i].status="done";
           newTodos.push(todos[i]);
        }
      }

      setTodos(newTodos);
      localStorage.setItem("tododata",JSON.stringify(newTodos));
    }


    console.log(todos);

  return (
    <div>
      <div style={{
        height:"500px",
        width:"400px",
        backgroundColor:"lightgray",
        borderRadius:"23px",
        margin:"0 auto",
        padding:"12px",
        display:"flex",
        flexDirection:"column",
        gap:"12px"
      }}>

        <div style={{display:"flex",justifyContent:"space-between"}}>
            <input
             style={{
                width:"80%",
                height:"25px"
            }} type="text"
            value={inpt} 
            onChange={(e)=>setInpt(e.target.value)}
             />
            <button onClick={addTodo}   style={{backgroundColor:"green"}}>Add</button>
        </div>
     
     {
        todos.map((todo)=>{
            return <TodoItem key={todo.id}  todo={todo} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
        })
     }


      </div>
    </div>
  )
}

export default Todolist
