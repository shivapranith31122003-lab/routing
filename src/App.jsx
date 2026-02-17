import React from 'react'
import Counter from './counter'
import Bgchanger from './Bgchanger'
import Navbar from './Navbar'
import Inputhandler from './Inputhandler'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Counter/>
      <hr />
      <Bgchanger/>
      <Inputhandler/> */}
      <h1>MainComp</h1>
      <Routes>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/Bgchanger" element={<Bgchanger/>}/>
        <Route path="/Inputhandler" element={<Inputhandler/>}/>
      </Routes>

    </div>
  )
}

export default App
