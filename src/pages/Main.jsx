import React from 'react'


//components
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Feature from '../components/Feature'
import Courses from '../components/Courses'
import Register from '../components/Register'
import Form from '../components/Form'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Feature/>
        <Courses/>
        <Register/>
        {/* <Form/> */}
    </div>
  )
}

export default Main