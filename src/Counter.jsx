import { useState } from "react";

function Counter() {
 
    const[count,setCount] =useState(0);



  function incCount() {
  setCount(count+1);
  
  }

  function decCount() {
    setCount(count-1);
 
  }

  return (
    <div>
      <button onClick={decCount}>-</button>

      <span >{count}</span>
      

      <button onClick={incCount}>+</button>
    </div>
  );
}

export default Counter;
