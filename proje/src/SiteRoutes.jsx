import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Stores from './pages/Stores'


function SiteRoutes({handleLogin}) {
  return (
  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='stores' element={<Stores/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<Login handleLogin={handleLogin}/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      
   
  )
}

export default SiteRoutes
