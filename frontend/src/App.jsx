import { useState } from 'react'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import Dashboard from './admin/Pages/Dashboard';
import Header from './admin/Components/Header';
import DesignManagement from './admin/Components/DesignManagement';

function App() {
  
  return (
    <>
    {/* <Navbar />   */}
    <Header/>
    <Routes>
      <Route path="/"  element={<Dashboard/>}/>
      <Route path="design" element={<DesignManagement/>} />
    </Routes>
    
  
    
    </>
  )
}

export default App
