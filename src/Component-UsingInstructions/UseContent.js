                
import React, {useState} from 'react';
import PhotoUseContent from '../assets/img/google-pixel.png';
import './UseContent.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
import UseComponent from './UseComponent/UseComponent';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {RiStethoscopeLine} from 'react-icons/ri';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';

 


function UseContent() {
    const [ UseLogin, setUseLogin] = useState(false)
    const [ Appointment, setappointment] = useState(false)
    const [ Creat, setCreat] = useState(false)
    const [ SelectInfo, setSelectInfo] = useState(false)
    const [ SelectBHYT, setSelectBHYT] = useState(false)
    const [ Confirm, setConfirm] = useState(false)
    const [ Pay, setPay] = useState(false)
    const [ ConfirmDKKB, setConfirmDKKB] = useState(false)

    // const EventToggleUsing = document.getElementById ('Using-login')

    // const EventSelectCalender = document.getElementById ('Select-Calender')
    // console.log(EventSelectCalender)


    function UsingFormat () {
        // EventToggleUsing.style.color = 'Red'
        // EventSelectCalender.style.display = 'none'
    }
//    function SelectCalender () {
//         EventSelectCalender.style.color = 'Red'
//         // EventToggleUsing.style.display = 'none'
//     }


    // EventToggleUsing.addEventListener('click',UsingFormat)
    
    // EventSelectCalender.addEventListener('click', SelectCalender)

        return (
            <div className='UseContainer'>
                <div className='UserContainer-Content'>
                    <div className='UserContainer-Content-Img'>
                        <img src={PhotoUseContent}></img>
                    </div>

                    <div  className='UserContainer-Content-List'>
                        <ul className='UserContainer-Content-List-Item'>
                            <li onClick={() =>setUseLogin(!UseLogin)} className='UserContainer-Content-Item' id='Using-login'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>1</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Đăng Nhập tài khoản</div>
                                       {     
                                            UseLogin? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p>Chọn 
                                                    <strong> Đăng Nhập</strong>
                                                    <i><AiOutlineArrowRight/></i>
                                                                Nhập số điện thoại di động                      
                                                    </p> 

                                                    <p>Nhập code verify 
                                                    <i><AiOutlineArrowRight/></i>
                                                    <strong> Đăng Nhập</strong>                 
                                                </p>


                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setappointment(!Appointment) }  className='UserContainer-Content-Item' id='Select-Calender'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>2</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Chọn lịch khám</div>
                                       {     
                                            Appointment? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p>Từ màn hình chính, bệnh nhân chọn</p>
                                                <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        Đặt lịch khám
                                                    </span>
                                                   
                                                </p>
                                                <p>Sau đó chọn dịch vụ</p>
                                                <p className='text-bold'>- Đặt khám theo ngày</p>
                                                <p className='text-bold'>- Đặt khám theo bác sĩ</p>

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setCreat(!Creat) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>3</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Tạo hồ sơ phám bệnh</div>
                                       {     
                                            Creat? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p>BN có thể sử dụng Số Hồ Sơ đã có, hoặc tạo mới Hồ Sơ BN bằng cách chọn 1 trong 2 dịch vụ:</p>
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        Đặt lịch khám
                                                    </span>
                                                   
                                                </p> */}
                                                
                                                <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p>

                                                <p>*MSBN được in trên phiếu khám bệnh, phiếu xuất viện, phiếu thanh toán ...</p>
                                                <p>vd:
                                                    <strong> N18-0060xx, B08-0060xx</strong>
                                                </p>

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setSelectInfo(!SelectInfo) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>4</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Chọn thông tin khám</div>
                                       {     
                                            SelectInfo? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p className='text-decoration'>Đặt khám theo bác sĩ:</p>
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        Đặt lịch khám
                                                    </span>
                                                   
                                                </p> */}
                                                {/* <p>Sau đó chọn dịch vụ</p> */}
                                                <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p>

                                                <p className='text-decoration'>Đặt khám theo ngày:</p>
                                                <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p>

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setSelectBHYT(!SelectBHYT) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>5</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Chọn BHYT</div>
                                       {     
                                            SelectBHYT? (<div className='UserContainer-Content-Item-Content-Text'>
                                                <p className='text-bold mg-10' >Chọn hình thức BHYT</p>
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        Đặt lịch khám
                                                    </span>
                                                   
                                                </p> */}
                                                <p>BV ĐHYD chỉ chấp nhận 2 trường hợp có bảo hiểm:</p>
                                                <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p>

                                                <p className='italic'>Các trường hợp còn lại, sẽ không được hưởng BHYT tại BV ĐHYD</p>
                                                {/* <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setConfirm(!Confirm) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>6</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Xác nhận thông tin</div>
                                       {     
                                            Confirm? (<div className='UserContainer-Content-Item-Content-Text'>
                                                {/* <p className='text-bold mg-10' >Chọn hình thức BHYT</p> */}
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        Đặt lịch khám
                                                    </span>
                                                   
                                                </p> */}
                                                <p>Xác nhận lại thông tin đã đăng ký</p>
                                                {/* <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p> */}

                                                <p className='italic'>Ở bước này : BN có thể chọn " Đăng ký thêm chuyên khoa " , để đặt khám thêm 1 chuyên khoa khác .</p>
                                                {/* <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setPay(!Pay) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>7</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Thanh Toán</div>
                                       {     
                                            Pay? (<div className='UserContainer-Content-Item-Content-Text'>
                                                {/* <p className='text-bold mg-10' >Chọn hình thức BHYT</p> */}
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        Đặt lịch khám
                                                    </span>
                                                   
                                                </p> */}
                                                <p>Chọn 1 trong các hình thức thanh toán và thực hiện thanh toán</p>
                                                {/* <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p> */}
                                                <p className='text-bold-small d-plex middle'>Thanh toán bằng thẻ khám bệnh<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh toán bằng Thẻ quốc tế Visa , Master ,JCB<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh toán bằng Thẻ ATM nội địa / Internet Banking<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold'>*Đối với ATM nội địa & Thẻ khám bệnh cần phải kích hoạt internet banking để thanh toán.</p>
                                                {/* <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>

                            <li onClick={() =>setConfirmDKKB(!ConfirmDKKB) }  className='UserContainer-Content-Item'>
                                <div className='UserContainer-Content-Item-Number'>
                                    <span>8</span>
                                </div>

                                <div className='UserContainer-Content-Item-Content'>
                                    <div className='UserContainer-Content-Item-Content-Name'>Xác nhận ĐKKB thành công</div>
                                       {     
                                            ConfirmDKKB? (<div className='UserContainer-Content-Item-Content-Text'>
                                                {/* <p className='text-bold mg-10' >Chọn hình thức BHYT</p> */}
                                                {/* <p>
                                                    <span className='book-an-appointment'>
                                                        <i><RiStethoscopeLine/></i>
                                                        Đặt lịch khám
                                                    </span>
                                                   
                                                </p> */}
                                                <p>Sau khi thanh toán thành công, bệnh nhân sẽ nhận được phiếu khám bệnh với thông tin tin đã đăng ký (Trên phần mềm, email & tin nhắn SMS)</p>
                                                <p>Trường hợp bị trừ tiền nhưng không nhận được phiếu khám bệnh, vui lòng liên hệ tổng đài:
                                                    <strong> 1900-2115</strong>
                                                </p>
                                                
                                                {/* <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p> */}
                                                {/* <p className='text-bold-small d-plex middle'>Thanh toán bằng thẻ khám bệnh<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh toán bằng Thẻ quốc tế Visa , Master ,JCB<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold-small d-plex'>Thanh toán bằng Thẻ ATM nội địa / Internet Banking<a href='#'><i><BsFillArrowRightSquareFill/></i></a></p>
                                                <p className='text-bold'>*Đối với ATM nội địa & Thẻ khám bệnh cần phải kích hoạt internet banking để thanh toán.</p> */}
                                                {/* <p className='text-bold'>- Đã từng khám, nhập Hồ Sơ</p>
                                                <p className='text-bold'>- Chưa từng khám, tạo Hồ Sơ mới</p> */}

                                                {/* <div className='HideUse' onClick={()=>setVisible(visible)}>
                                                    <i onClick={()=>setVisible(visible)}><AiOutlineArrowUp/></i>
                                                </div> */}

                                            </div>):null                                                                                       
                                        }                                                                          
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>    
                           
            </div>
        );
    }


export default UseContent;