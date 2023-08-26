import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Dashboard from '../Pages/Dashboard'
import LoginPage from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'
import AdminPage from '../Pages/AdminPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/admin' element={<AdminPage />} />
    </Routes>
  )
}

export default MainRoutes
