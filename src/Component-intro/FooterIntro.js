import React, { Component } from 'react';
import './FooterIntro.css';
import logoFooter from '../assets/img/logocopy.png'
import photoFooter from '../assets/img/bocongthuong.png'
import photoFooter2 from '../assets/img/20150827110756-dadangky.png'
import photoFooter3 from '../assets/img/appstorecopy.png'
import photoFooter4 from '../assets/img/ggplaycopy.png'

class FooterIntro extends Component {
    render() {
        return (

            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-content-above'>
                        <div className='footer-content-left'>
                            <div className='footer-logo'>
                                <img src={logoFooter}></img>
                            </div>

                            <div className='footer-location'>
                                <p className='footer-text-name'>INFI-HEALTH HOSPITAL</p>
                                <p className='footer-text-location'>422 Vĩnh Hưng, Hai Bà Trưng, Hà Nội</p>
                                <a className='footer-phone-number' href='tel:0868158218'><p>+84 - 868 158 218</p></a>
                                <a className='footer-website' href='#'><p>www.infihealth.com.vn</p></a>
                            </div>
                        </div>

                        <div className='footer-content-center'>
                            <a href='' className='footer-text-contact'><p>Liên Hệ</p></a>
                            <a href='' className='footer-text-ask'><p>Hỏi đáp</p></a>
                            <a href='' className='footer-text-Terms-of-Service'><p>Điều Khoản Dịch Vụ</p></a>
                            <a href='' className='footer-text-Privacy-Policy'><p>Chính Sách Bảo Mật</p></a>
                            <a href='' className='footer-text-regulation'><p>Quy Định Sử dụng</p></a>
                        </div>

                        <div className='footer-content-right'>
                            <img className='bo-cong-thuong' src={photoFooter}></img>
                            <img className='bo-cong-thuong-dang-ký' src={photoFooter2}></img>
                            <p>Tải Ứng Dụng</p>
                            <a href='' className='img-dow-apk'><img  src={photoFooter3}></img></a>
                            <a href='' className='img-dow-ios'><img  src={photoFooter4}></img></a>
                        </div>
                    </div>

                    <div className='footer-content-below'>
                        <p className=''>© 2018 - Bản quyền thuộc Công Ty Cổ Phần Ứng Dụng LEMON TECHOLOGY</p>
                        <p className=''>©Giấy CNĐKDN số 0314886357, do Sở Kế Hoạch và Đầu Tư Tp Hà Nội - cấp ngày 21/01/2019.</p>
                        <p className=''>Trụ sở: 422 Vĩnh Hưng, Thanh Trì, Hoàng Mai, HN.</p>
                        <p className=''>Điện thoại: (+84) 868 158 218.</p>

                    </div>
                </div>
            </div>

        );
    }
}

export default FooterIntro;