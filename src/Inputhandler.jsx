import React, { useState } from 'react'

function Inputhandler() {
    const[inputvalue,setinputvalue]=useState('shiva')
  return (
    <div>
        <input type="text" placeholder='Enter something here:'
        onChange={(e)=>{setinputvalue(e.target.value)}} />
        <h1>{inputvalue}</h1>
    </div>
  )
}

export default Inputhandler