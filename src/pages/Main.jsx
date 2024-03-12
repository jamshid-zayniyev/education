import React from 'react'


//components
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Feature from '../components/Feature'
import Courses from '../components/Courses'
import Register from '../components/Register'
import Form from '../components/Form'
import Experts from '../components/Experts'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Feature/>
        <Courses/>
        <Register/>
        <Experts/>
    </div>
  )
}

export default Main