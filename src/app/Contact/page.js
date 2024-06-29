import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

const page = () => {
  return (
    <div>
      <Header highlight="contact"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default page
