import React from 'react'
import Header from '../Components/Header'
import AboutUs from '../Components/AboutUs'
import Footer from '../Components/Footer'


const page = () => {
  return (
    <div>
      <Header highlight="about"/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default page
