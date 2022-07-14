import React, { Component } from 'react';
import NavUsingInstructions from './Component-UsingInstructions/NavUsingInstructions'
import SliderUse from './Component-UsingInstructions/SliderUse';
import UseContent from './Component-UsingInstructions/UseContent';
import FooterUse from './Component-UsingInstructions/FooterUse';
import Nav from './Components-TrangChu/Nav';

class UsingInstructions extends Component {
    render() {
        return (

            <>
                <Nav/>

                <SliderUse/>

                <UseContent/>

                <FooterUse/>
            </>
        );
    }
}

export default UsingInstructions;