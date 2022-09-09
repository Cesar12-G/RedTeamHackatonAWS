import { useState } from 'react'
import { Main } from '../Map/Main'
import { Navbar } from '../UI/Navbar'
import './App.css'
// import { LandingPage } from '../Main/LandingPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  )
}

export default App
