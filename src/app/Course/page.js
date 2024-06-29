import React from 'react'
import Header from '../Components/Header'
import Courses from '../Components/Courses'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
      <Header highlight="courses"/>
      <Courses />
      <Footer/>
    </div>
  )
}

export default page
