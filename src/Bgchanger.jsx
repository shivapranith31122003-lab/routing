import React from 'react'
import { useState } from 'react'

function Bgchanger() {
    const[bgcolor,setbgcolor]=useState({"clr":'black',"padding":'30px'})
    function changeclr(p){
    setbgcolor({...bgcolor,clr:p})
    }
  return (
    <div style={{backgroundColor:bgcolor.clr,padding:bgcolor.padding}}>
        <button onClick={()=>{changeclr('orange')}}>Orange</button>
        <button onClick={()=>{changeclr('white')}}>White</button>
        <button onClick={()=>{changeclr('green')}}>Green</button>
    </div>
  )
}

export default Bgchanger