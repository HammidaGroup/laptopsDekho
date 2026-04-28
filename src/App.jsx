import React from 'react'

import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import MoreInfoPage from './pages/MoreInfoPage'
import AddLaptop from './pages/AddLaptop'

const App = () => {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/moreInfo' element={<MoreInfoPage/>}/>
      <Route path='/addLaptop' element={<AddLaptop/>}/>
    </Routes>
    </>
  )
}

export default App