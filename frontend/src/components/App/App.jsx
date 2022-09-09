import { useState } from 'react'
import { Main } from '../Map/Main'
import { PropetiesSidebar } from '../Map/PropetiesSidebar'
import PersonList from '../PersonList'
import { Navbar } from '../UI/Navbar'
import './App.css'
// import { LandingPage } from '../Main/LandingPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PropetiesSidebar />
    </div>
  )
}

export default App
