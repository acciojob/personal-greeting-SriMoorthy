
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[name,setName]=useState('')

  const inputHandler = (e) =>{
    setName(e.target.value)
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label>
        <input type="name" id="name" onChange={inputHandler}/>
        {name && <h2>Hello {name}!</h2>}
    </div>
  )
}

export default App
