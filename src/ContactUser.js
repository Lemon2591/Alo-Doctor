import React from 'react'
import NavUser from './ComponentUser/NavUser'
import SliderContact from './Component-Contact/SliderContact'
import SupportForm from './Component-Contact/SupportForm'
import Footer from './Components-TrangChu/Footer'



function ContactUser() {
  return (
   <>
    <NavUser/>

    <SliderContact/>

    <SupportForm/>

    <Footer/>
   </>
  )
}

export default ContactUser