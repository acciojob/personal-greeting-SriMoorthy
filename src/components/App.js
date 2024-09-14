
import React, { useState } from "react";
import './../styles/App.css';

function Greeting(){

  const[name,setName]=useState()

  const inputHandler = (e) =>{
    setName(e.target.value)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label><br/><br/>
        <input type="text" id="name" onChange={inputHandler}/>
        <p>{name &&`Hello ${name}!`}</p>
    </div>
  )
}

export default Greeting
