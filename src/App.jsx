import { useState } from 'react'
import './App.css'
import Login from './components/auth/Login.jsx'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/dashboard/AdminDashboard.jsx'
import Navbar from './components/others/Navbar.jsx'

function App() {

  return (
    <>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>
      {/* <Navbar/> */}
    </>
  )
}

export default App
