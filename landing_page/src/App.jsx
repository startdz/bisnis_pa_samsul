import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Form/Admin/Register'
import Login from './components/Form/Admin/Login'
import Dashboard from './components/Page/Admin/Dashboard'
import Home from './components/Home/Home'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/auth/register' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/project/admin/dashboard' element={<Dashboard />} />
      </Routes>
      <Home />
    </React.Fragment>
  )
}

export default App