import React, { Component } from 'react'
import Nav from './Components-TrangChu/Nav';
import Footer from './Components-TrangChu/Footer';
import FormRegister from './Component-Login/FormRegister';
import FormLogin from './Component-Login/FormLogin';


class Login extends Component {
  render() {
    return (
      <>
        <Nav/>
        <FormLogin/>
        <Footer/>
      </>
    )
  }
}

export default Login