import React, { Component } from 'react'
import Nav from './Components-TrangChu/Nav';
import Footer from './Components-TrangChu/Footer';
import FormRegister from './Component-Login/FormRegister';



class Register extends Component {
  render() {
    return (
      <>
        <Nav/>
        <FormRegister/>
        <Footer/>
      </>
    )
  }
}

export default Register