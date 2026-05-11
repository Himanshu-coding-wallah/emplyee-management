import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/auth/Login.jsx'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/dashboard/AdminDashboard.jsx'
import Navbar from './components/others/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='employee-dashboard' element={<EmployeeDashboard/> } />
        <Route path='admin-dashboard' element={<AdminDashboard/>} />
      </Routes>
    </>
  )
}

export default App
