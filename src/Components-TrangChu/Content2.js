import React, { Component } from 'react';
import './content2.css';
import PhotoContent2 from '../assets/img/home_map.png'

class Content2 extends Component {
    render() {
        return (
            <div className='content2-container'>

                <div className='content2-title'>
                    <p className=''>Mạng lưới y tế INFI-HEALTH</p>
                </div>

                <div className='content2-content'>

                    <div className='content2-all-item'>
                        <ul className='content2-list-item'>
                            <li className='content2-item'>
                                <span className='content-bg-item'>53</span>
                                <span className='content-bg-item-text'>TỈNH THÀNH PHỐ</span>
                            </li>

                            <li className='content2-item'>
                                <span className='content-bg-item'>1468</span>
                                <span className='content-bg-item-text'>BÁC SĨ</span>
                            </li>

                            <li className='content2-item'>
                                <span className='content-bg-item'>472</span>
                                <span className='content-bg-item-text'>BỆNH VIỆN PHÒNG KHÁM</span>
                            </li>

                            <li className='content2-item'>
                                <span className='content-bg-item'>325</span>
                                <span className='content-bg-item-text'>TRUNG TÂM XÉT NGHIỆM</span>
                            </li>

                            <li className='content2-item'>
                                <span className='content-bg-item'>562</span>
                                <span className='content-bg-item-text'>ĐIỀU DƯỠNG</span>
                            </li>

                            
                        </ul>
                    </div>
        
                    <div className='content2-img'>
                        <img src={PhotoContent2}></img>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Content2;