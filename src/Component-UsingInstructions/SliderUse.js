import React, { Component } from 'react';
import './SliderUse.css';
import logoPlay from '../assets/img/ggplay.png';
import logoAppStore from '../assets/img/appstore.png';

class SliderUse extends Component {
    render() {
        return (
            <div className='SliderUser-Img'>
                <div className='sliderUse-app'>
                    <p className='sliderUse'>
                    HƯỚNG DẪN ĐĂNG KÝ KHÁM BỆNH
                      <br></br>
                      VÀ THANH TOÁN QUA ỨNG DỤNG
                      </p>
                    <p className=' sliderUse-text'>TẢI ỨNG DỤNG</p>
                    
                    <div className='sliderUse-download'>
                        <a className='sliderUse-app-link' href=''>
                            <img className='slider-app-ggplay' src={logoPlay}></img>
                        </a>
                        
                        
                        <a className='sliderUse-app-link' href=''>
                            <img className='slider-app-appstore' src={logoAppStore}></img>
                        </a>
                    </div>
                    

                </div>
            </div>
        );
    }
}

export default SliderUse;