
import React, { useState } from "react";
import './../styles/App.css';

function Greeting(){

  const[name,setName]=useState('')

  const inputHandler = (e) =>{
    setName(e.target.value)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label><br></br><br></br>
        <input type="text" value={name} id="name" onChange={inputHandler}/>
        {name &&<h1>Hello {name}!</h1>}
    </div>
  )
}

export default Greeting
