import React from 'react'
import Header from '../Components/Header'
import SignupForm from '../Components/SignupForm'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
      <Header highlight="login"/>
      <SignupForm/>
      <Footer/>
    </div>
  )
}

export default page
