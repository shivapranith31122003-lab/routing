import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)
return(
  <div>
    <h1>Shivapraneeth</h1>
    <h2>Mothe</h2>
    <h3>503311</h3>
   <button onClick={()=>{setCount(count+1)}}>+</button>
   <p>{count}</p>
   <button onClick={()=>{setCount(count-1)}}>-</button>
  </div>
)
}
export default Counter