import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'

const Routers = () => {
  return (
    <Routes>
        <Route path='project1' element={<Project1/>} />
        <Route path='project2' element={<Project2/>} />
    </Routes>
  )
}

export default Routers