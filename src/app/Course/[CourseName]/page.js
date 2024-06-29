import Footer from '@/app/Components/Footer'
import Header from '@/app/Components/Header'
import Newcourses from '@/app/Components/Newcourses'
import React from 'react'

const page = () => {
    
  return (
    <div>
      <Header highlight={"courses"}/>
      <Newcourses/>
      <Footer/>
    </div>
  )
}

export default page
