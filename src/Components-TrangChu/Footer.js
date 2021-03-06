import React, { Component } from 'react';
import './footer.css';
import logoFooter from '../assets/img/logocopy.png'
import photoFooter from '../assets/img/bocongthuong.png'
import photoFooter2 from '../assets/img/20150827110756-dadangky.png'
import photoFooter3 from '../assets/img/appstorecopy.png'
import photoFooter4 from '../assets/img/ggplaycopy.png'

class Footer extends Component {
    render() {
        return (
           
               
               /* <footer id="footer">
    <div class="footer-newsletter">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                </div>
                <div class="col-lg-6">
                    <form action="" method="post"> <input type="email" name="email"/><input type="submit" value="Subscribe"/></form>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p> A108 Adam Street <br></br> New York, NY 535022 <br></br> United States <br></br> <strong>Phone:</strong> +1 5589 55488 55<br></br> <strong>Email:</strong> info@example.com<br></br> </p>
                </div>
                <div class="col-lg-3 col-md-6 footer-info">
                    <h3>About DevVE</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                    <div class="social-links mt-3"> <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a> <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a> <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a> <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="copyright"> ?? Copyright <strong><span>DevVE</span></strong>. All Rights Reserved </div>
        <div class="credits"> Designed by <a href="#">SalvadorDevVE</a> </div>
    </div>
</footer> */

            


            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-content-above'>
                        <div className='footer-content-left'>
                            <div className='footer-logo'>
                                <img src={logoFooter}></img>
                            </div>

                            <div className='footer-location'>
                                <p className='footer-text-name'>INFI-HEALTH HOSPITAL</p>
                                <p className='footer-text-location'>422 V??nh H??ng, Hai B?? Tr??ng, H?? N???i</p>
                                <a className='footer-phone-number' href='tel:0868158218'><p>+84 - 868 158 218</p></a>
                                <a className='footer-website' href='#'><p>www.infihealth.com.vn</p></a>
                            </div>
                        </div>

                        <div className='footer-content-center'>
                            <a href='' className='footer-text-contact'><p>Li??n H???</p></a>
                            <a href='' className='footer-text-ask'><p>H???i ????p</p></a>
                            <a href='' className='footer-text-Terms-of-Service'><p>??i???u Kho???n D???ch V???</p></a>
                            <a href='' className='footer-text-Privacy-Policy'><p>Ch??nh S??ch B???o M???t</p></a>
                            <a href='' className='footer-text-regulation'><p>Quy ?????nh S??? d???ng</p></a>
                        </div>

                        <div className='footer-content-right'>
                            <img className='bo-cong-thuong' src={photoFooter}></img>
                            <img className='bo-cong-thuong-dang-k??' src={photoFooter2}></img>
                            <p>T???i ???ng D???ng</p>
                            <a href='' className='img-dow-apk'><img  src={photoFooter3}></img></a>
                            <a href='' className='img-dow-ios'><img  src={photoFooter4}></img></a>
                        </div>
                    </div>

                    <div className='footer-content-below'>
                        <p className=''>?? 2018 - B???n quy???n thu???c C??ng Ty C??? Ph???n ???ng D???ng LEMON TECHOLOGY</p>
                        <p className=''>??Gi???y CN??KDN s??? 0314886357, do S??? K??? Ho???ch v?? ?????u T?? Tp H?? N???i - c???p ng??y 21/01/2019.</p>
                        <p className=''>Tr??? s???: 422 V??nh H??ng, Thanh Tr??, Ho??ng Mai, HN.</p>
                        <p className=''>??i???n tho???i: (+84) 868 158 218.</p>

                    </div>
                </div>



            </div>

        );
    }
}

export default Footer;