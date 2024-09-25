import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <div className='main'>
      <Header />
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
