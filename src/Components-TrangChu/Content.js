import React, { Component } from 'react';
import './Content.css';
import '../assets/img/keyframe.css';
import imgContent0 from '../assets/img/slider.png'
import imgContent1 from '../assets/img/e-blood-tube.png'
import imgContent2 from '../assets/img/e-delivery-man.png'
import imgContent3 from '../assets/img/e-doctor.png'
import imgContent4 from '../assets/img/e-hospital.png'
import imgContent5 from '../assets/img/e-medicine.png'
import imgContent6 from '../assets/img/e-nurse.png'

class Content extends Component {
    render() {
        return (
            <div className='content-container'>
                <div className='content-content'>
                    <div className='content-img'>
                        <img src={imgContent0}></img>
                    </div>
                    <div className='content-content-right'>
                        <p className='content-title'>
                            MỖI NGƯỜI DÂN CÓ MỘT 
                            <span> BÁC SĨ RIÊNG</span>
                        </p>
                        <p className='content-text'>INFI-HEALTH là nền tảng kết nối bệnh nhân và hàng ngàn Bác sĩ giỏi với tất cả 32 chuyên khoa đang công tác tại các bệnh viện lớn trên cả nước.</p>
                        <ul className='content-list-item'>
                            <li className='content-item'>
                               <span className='content-item-img'>
                                <img  src={imgContent3}></img>
                               </span>
                               <span>Bác sĩ riêng</span>
                            </li>

                            <li className='content-item'>
                               <span className='content-item-img'>
                                <img  src={imgContent2}></img>
                               </span>
                               <span>Giao thuốc tận nơi</span>
                            </li>

                            <li className='content-item'>
                               <span className='content-item-img'>
                                <img  src={imgContent6}></img>
                               </span>
                               <span>Chăm sóc tại nhà</span>
                            </li>

                            <li className='content-item'>
                               <span className='content-item-img'>
                                <img  src={imgContent5}></img>
                               </span>
                               <span>Sản phẩm sức khỏe</span>
                            </li>

                            <li className='content-item'>
                               <span className='content-item-img'>
                                <img  src={imgContent1}></img>
                               </span>
                               <span>Lấy mẫu tại nhà</span>
                            </li>

                            <li className='content-item'>
                               <span className='content-item-img'>
                                <img  src={imgContent4}></img>
                               </span>
                               <span>Đặt lịch khám</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Content;