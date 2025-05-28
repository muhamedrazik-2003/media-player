import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Login from './pages/Login'
import Reg from './pages/Reg'
import { Routes,Route } from 'react-router-dom'

function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/his' element={<History/>}/> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App