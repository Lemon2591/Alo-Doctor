import React, { Component } from 'react';
import NavContact from './Component-Contact/NavContact';
import SliderContact from './Component-Contact/SliderContact';
import SupportForm from './Component-Contact/SupportForm';
import Footer from './Components-TrangChu/Footer'
import Nav from './Components-TrangChu/Nav';

class Contact extends Component {
    render() {
        return (
            <>
            <Nav/>   

            <SliderContact/>

            <SupportForm/>

            <Footer/>
            </>
            
        );
    }
}

export default Contact;