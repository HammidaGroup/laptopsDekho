import React from 'react'

import HomePage from './pages/HomePage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MoreInfoPage from './pages/MoreInfoPage'
import AddLaptop from './pages/AddLaptop'
import LoginSucsess from './middlewares/LoginSucsess'
import ProtectedRoute from './middlewares/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import DashPage from './pages/DashPage'

const App = () => {
  

  return (
    <>
  
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/moreInfo' element={<MoreInfoPage/>}/>
      <Route path='/sellLaptop' element={ <AddLaptop /> }/>
      <Route path='/dashBoard' element={ <DashPage/> }/>
      <Route path='/login-success' element={<LoginSucsess/>}/>
    </Routes>
    </>
  )
}

export default App