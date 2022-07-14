import React, { Component } from 'react';
import NavIntro from './Component-intro/NavIntro';
import SliderIntro from './Component-intro/SliderIntro';
import FooterIntro from './Component-intro/FooterIntro';
import Nav from './Components-TrangChu/Nav';

class Intro extends Component {
    render() {
        return (
            <>
                <Nav/>


                <SliderIntro/>

                <FooterIntro/>
            </>
        );
    }
}

export default Intro;