import React, { Component } from 'react'
import Footer from './Components-TrangChu/Footer';
import NavUser from './ComponentUser/NavUser';
import MedicalBillProfile from './Profile-patient/MedicalBillProfile';

class MedicalBill extends Component {
  render() {
    return (
      <>
        <NavUser/>
        <MedicalBillProfile />
        <Footer/>
      </>
    )
  }
}

export default MedicalBill