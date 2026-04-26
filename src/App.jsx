import React from 'react'

import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import MoreInfoPage from './pages/MoreInfoPage'

const App = () => {
  return (
    <>
  
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/moreInfo' element={<MoreInfoPage/>}/>
    </Routes>
    </>
  )
}

export default App