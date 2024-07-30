import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        height:"40px",
        backgroundColor:"gray",
        border:"1px solid black",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"12px"
    }}>

        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/contact'}>contact</Link>
      
    </div>
  )
}

export default Navbar
