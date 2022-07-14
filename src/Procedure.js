import React, { Component } from 'react';
import NavProcedure from './Component-Procedure/NavProcedure';
import SliderPro from './Component-Procedure/SliderPro';
import FooterPro from './Component-Procedure/FooterPro';
import Nav from './Components-TrangChu/Nav';

class Procedure extends Component {
    render() {
        return (

            <>
            <Nav/>

            <SliderPro/>

            <FooterPro/>
            

            </>
        );
    }
}

export default Procedure;