import React, { Component } from 'react'
import Nav from './Components-TrangChu/Nav';
import Footer from './Components-TrangChu/Footer';
import FormRegister from './Component-Login/FormRegister';
import FormLogin from './Component-Login/FormLogin';
import NavUser from './ComponentUser/NavUser';
import PatientProfileContent from './Profile-patient/PatientProfileContent';

class PatientProfile extends Component {
  render() {
    return (
      <>
        <NavUser/>
        <PatientProfileContent/>
        <Footer/>
      </>
    )
  }
}

export default PatientProfile