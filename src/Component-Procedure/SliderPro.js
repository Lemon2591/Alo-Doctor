import React, { Component } from 'react';
import './SliderPro.css';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import PhotoSliderPro from '../assets/img/3.jpeg';

class SliderPro extends Component {
    render() {
        return (

        <>

            <div className='sliderPro-img'>
                <img src={PhotoSliderPro}></img>
            </div>



            <div className='sliderPro-container'>
                <div className='container-content'>
                    <div className='container-title'>
                        <p>QUY TRÌNH ĐĂNG KÝ KHÁM BỆNH</p>
                    </div>
                    
                    <div className='container-item'>
                        <ul className='conainer-list'>
                            <li>
                                <p className='list-item-step'>BƯỚC 1</p>
                            <div className='item-down'>
                                <h3>ĐẶT LỊCH KHÁM</h3>

                                <div className='inside'>
                                <span><i><AiOutlineDoubleRight/></i>Đăng nhập phần mềm trên web hoặc ứng dụng di động.</span>
                                <span><i><AiOutlineDoubleRight/></i>Chọn hình thức đặt khám: Theo ngày hoặc theo bác sĩ.</span>
                                <span><i><AiOutlineDoubleRight/></i>Nhập thông tin bệnh nhân: Bằng số hồ sơ hoặc tạo mới.</span>
                                <span><i><AiOutlineDoubleRight/></i>Chọn thông tin khám: Chuyên khoa, bác sĩ, ngày khám, giờ khám và có BHYT hay không.</span>
                                </div>
                                
                            </div>
                            </li>

                            <li>
                                <p className='list-item-step'>BƯỚC 2</p>
                            <div className='item-down'>
                                <h3>THANH TOÁN TIỀN KHÁM</h3>

                                <div className='inside'>
                                <span><i><AiOutlineDoubleRight/></i>Chọn loại thẻ thanh toán: Thẻ khám bệnh của bệnh viện Đại Học Y Dược TPHCM, thẻ thanh toán quốc tế hoặc thẻ ATM nội địa.</span>
                                <span><i><AiOutlineDoubleRight/></i>Kiểm tra tiền khám, các loại phí và tổng tiền thanh toán.</span>
                                <span><i><AiOutlineDoubleRight/></i>Nhập thông tin thẻ để tiến hành thanh toán.</span>
                                <div className='slider-pro-attention'>
                                    <strong>Lưu ý:</strong>
                                    <span className='font-italic'><i><AiOutlineDoubleRight/></i>Thanh toán bằng thẻ khám bệnh của Bệnh viện Đại học Y Dược TPHCM, phí tiện ích sẽ có mức thấp nhất.</span>
                                    <span className='font-italic'><i><AiOutlineDoubleRight/></i>Đối với thẻ khám Bệnh viện Đại học Y Dược TPHCM, vui lòng đăng ký chức năng thanh toán trực tuyến tại các chi nhánh Vietinbank trong cả nước, trước khi sử dụng.</span>
                                </div>
                                </div>
                                
                            </div>
                            </li>

                            <li>
                                <p className='list-item-step'>BƯỚC 3</p>
                            <div className='item-down'>
                                <h3>XÁC NHẬN NGƯỜI BỆNH ĐẾN BỆNH VIỆN KHÁM THEO HẸN</h3>

                                <div className='inside'>
                                <span><i><AiOutlineDoubleRight/></i>Sau khi đặt khám thành công phiếu khám điện tử sẽ được gửi ngay qua email, tin nhắn sms và trên phần mềm.</span>
                                <span><i><AiOutlineDoubleRight/></i><strong>Đến ngày khám</strong></span>
                                <span className='ml-4'><i><AiOutlineDoubleRight/></i>Người bệnh không BHYT sẽ đến trực tiếp phòng khám trước giờ hẹn 15-30 phút để khám bệnh .</span>
                                <span className='ml-4'><i><AiOutlineDoubleRight/></i>Người bệnh khám BHYT vui lòng đến quầy 12,13,14 khu A trước giờ hẹn 15-30 phút để xác nhận bảo hiểm trước khi vào phòng khám .</span>
                                </div>
                                
                            </div>
                            </li>

                            <li>
                                <p className='list-item-step'>BƯỚC 4</p>
                            <div className='item-down'>
                                <h3>KHÁM VÀ THỰC HIỆN CẬN LÂM SÀNG</h3>

                                <div className='inside'>
                                <span><i><AiOutlineDoubleRight/></i>Người bệnh khám tại các phòng khám chuyên khoa theo thông tin khám đã đặt.</span>
                                <span><i><AiOutlineDoubleRight/></i>Thực hiện cận lâm sàng (nếu có) và đóng phí tại các quầy thu ngân hoặc trừ vào tài khoản thẻ khám bệnh (nếu có).</span>
                                <span><i><AiOutlineDoubleRight/></i>Khi đủ kết quả cận lâm sàng, người bệnh quay lại phòng khám gặp Bác sĩ nhận toa thuốc.</span>
                                
                                </div>
                                
                            </div>
                            </li>

                            <li>
                                <p className='list-item-step'>BƯỚC 5</p>
                            <div className='item-down'>
                                <h3>NHẬN THUỐC</h3>

                                <div className='inside'>
                                <span><i><AiOutlineDoubleRight/></i><strong>Người bệnh có BHYT:</strong> Thực hiện kết toán BHYT tại quầy 17,18,19,20 tầng trệt khu A và nhận thuốc tại nhà thuốc khu B.</span>
                                <span><i><AiOutlineDoubleRight/></i><strong>Người bệnh không có BHYT:</strong> Đến nhà thuốc khu A hoặc khu B mua thuốc, thanh toán tiền thuốc tại quầy hoặc trừ vào tài khoản thẻ khám bệnh (nếu có).</span>
                                
                                </div>
                                
                            </div>
                            </li>

                            <li>
                                <p className='list-item-step'>BƯỚC 6</p>
                            <div className='item-down'>
                                <h3>ĐẶT LỊCH TÁI KHÁM</h3>

                                <div className='inside'>
                                <span><i><AiOutlineDoubleRight/></i>Sử dụng phần mềm đặt hẹn tái khám như BƯỚC 1 và BƯỚC 2 để nhận phiếu khám điện tử.</span>
                                <div className='slider-pro-attention'>
                                    <strong>Lưu ý:</strong>
                                    <span className='font-italic'><i><AiOutlineDoubleRight/></i>Chọn bác sĩ khám và ngày tái khám theo thông tin trên toa thuốc.</span>
                                    <span className='font-italic'><i><AiOutlineDoubleRight/></i>Nhập thông tin người bệnh bằng số hồ sơ trên toa thuốc (không được tạo mới).</span>
                                </div>
                                </div>
                                
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>               
            </div>

        </>


        );
    }
}

export default SliderPro;