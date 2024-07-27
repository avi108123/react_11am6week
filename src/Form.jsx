import React, { useState } from 'react'
import { BiShow } from "react-icons/bi";

const Form = () => {

  const[name,setName] =useState("");
  const[email,setEmail] =useState("");
  const[password,setPassword] =useState("");

  const[showp,setShowp] =useState(false)


function showData(e){
    e.preventDefault();
    let data ={
        name:name,
        email:email,
        password:password
    }
  console.log(data)
}

  return (
    <form
    
    onSubmit={(e)=>showData(e)}
    
    style={{
        width:"300px",
        height:"400px",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"gray",
        padding:"6px",
        gap:"12px",
        margin:"0 auto"
    }}>
      <input style={{height:"23px"}} type="text" placeholder='name' value={name} onChange={(e)=>{setName(e.target.value)}} />
      <input style={{height:"23px"}} type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <div style={{width:"100%",display:"flex",justifyContent:"space-between",backgroundColor:"white"}}>
      <input style={{height:"23px",width:"80%"}} type={showp?"text":"password"} placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
     <BiShow size={'25px'}  onMouseEnter={()=>setShowp(true)} onMouseLeave={()=>setShowp(false)}    />
      </div>
      <button  style={{height:"23px",backgroundColor:"blue"}} >Submit</button>
    </form>
  )
}

export default Form
