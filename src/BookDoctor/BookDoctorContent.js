import emailjs from 'emailjs-com';
import { send } from 'emailjs-com'
import React, {useState} from 'react';
import ProfilePhoto from '../assets/img/blur-05.jpeg';
import './BookDoctorContent.css'
import {AiOutlineProfile} from 'react-icons/ai';
import {MdOutlineAirplaneTicket} from 'react-icons/md';
import {IoNotificationsCircleOutline} from 'react-icons/io5';
import {AiOutlineCreditCard} from 'react-icons/ai';
import {AiOutlineFileAdd} from 'react-icons/ai';
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";

function BookDoctorContent() {

    const [checkSendOk, setCheckSendOk] = useState (false)
    const [CheckSendErr, setCheckSendErr] = useState (false)


    const [fullName, setFullName] = useState ('');

    const [phoneNumber, setPhoneNumber] = useState ('');

    const [date, setDate] = useState ('');

    const [location, setLocation] = useState ('');

    const [sex, setSex] = useState ('');
    
    const [bookDay, setBookDay] = useState ('');

    const [time, setTime] = useState ('');


    const handleFullName = (e) => {
            setFullName(e.target.value)
    }

    const handlePhoneNumber = (e) => {
            setPhoneNumber(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }   

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const handleSex = (e) => {
        setSex(e.target.value)
    }

    const handleBookDay = (e) => {
        setBookDay(e.target.value)
    }

    const handleTime = (e) => {
        setTime(e.target.value)
    }
    


    const sendData = (e) => {

        setFullName('')
        setPhoneNumber('')
        setDate('')
        setLocation('')
        setSex ('')
        setBookDay('')
        setTime('')


        e.preventDefault();
        send(
            'service_t6evy4w',
            'template_01i787d',
            {
                fullName,
                phoneNumber,
                sex,
                location,
                bookDay,
                date,
                time
            },
            'BXfEhSXDFx6iNNDHW' 
        )
        .then( setCheckSendOk )
        .catch( setCheckSendErr)
    }



  return (
   <>
    <div className='Siler-Patient'>
        <div className='slider-content'>
            <img src={ProfilePhoto}></img>
        </div>


        <div className='title-book-doctor'>
            <p>ĐẶT LỊCH KHÁM TẠI VIỆN THEO NGÀY</p>
        </div>


        <div className='form-book-doctor'>
            <div className='form-book-doctor-content'>
                <div className='form-add'>
                    <form onSubmit={sendData}> 

                        <div className='format-form-info d-flex d-flex1'>
                            <div className="form-outline mb-4 col-md-6">
                            <label className="form-label" for="fullName" >Họ và tên</label>
                            <input name='fullName' type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Vui lòng nhập họ và tên (có dấu )'
                            required 
                            value={fullName}
                            onChange={handleFullName}
                            />
                            </div>

                            <div className="form-outline mb-4 col-md-6">
                            <label className="form-label" for="phoneNumber" >Số điện thoại</label>
                            <input name='phoneNumber' type="text" id="form3Example3cg" className="form-control form-control-lg" placeholder='Vui lòng nhập số điệnh thoại' 
                            required
                            value={phoneNumber}
                            onChange={handlePhoneNumber}
                            />
                            </div>
                        </div>

                        <div className='format-form-info d-flex d-flex1'>
                            <div className="form-outline mb-4 col-md-6">
                            <label className="form-label" for="date" >Ngày sinh </label>
                            <input name='date' type="date" id="form3Example4cg" className="form-control form-control-lg"
                            required
                            value={date}
                            onChange={handleDate}
                            />
                            </div>

                            <div className="form-outline mb-4 col-md-6">
                            <label className="form-label" for="location">Nhập địa chỉ</label>
                            <input name='location' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Nhập địa chỉ'
                            onChange={handleLocation}
                            required
                            value={location}
                            />
                            </div>
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2 form-outline fomat-form d-flex1">

                            <h6 className="mb-0 me-4">Giới tính :</h6>

                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="sex"
                                id="femaleGender"
                                value="Nam"
                                onChange={handleSex}
                                />
                                <label className="form-check-label" for="sex">Nam</label>
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"                                                   
                                id="maleGender"
                                value="Nữ"
                                name='sex'
                                onChange={handleSex}

                                />
                                <label className="form-check-label" for="sex">Nữ</label>
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4">
                                <input
                                className="form-check-input"
                                type="radio"                                                   
                                id="maleGender"
                                value="Khác"
                                name='sex'
                                onChange={handleSex}
                                />
                                <label className="form-check-label" for="sex">Khác</label>
                            </div>

                        </div>

                        

                        

                        <div className='format-form-info d-flex d-flex1' >
                            <div className="form-outline mb-4 col-md-6">
                            <label className="form-label" for="bookDay" >Đặt ngày khám</label>
                            <input name='bookDay' type="date" id="form3Example4cg" className="form-control form-control-lg" placeholder='Địa chỉ'
                            required
                            value={bookDay}
                            onChange={handleBookDay}
                            />
                            </div>

                            <div className="form-outline mb-4 col-md-6">
                                <label className="form-label" for="time">Đặt khung giờ khám</label>
                                
                                <select onChange={handleTime} value={time} name='time' type="time" id="form3Example4cdg" className="form-control form-control-lg custom-select" placeholder='Dân tộc'>
                                    <option value='0'>Chọn</option>
                                    <option value="0:00 - 03:00 (AM)">0:00 - 03:00 (AM)</option>
                                    <option value="03:00 - 05:00 (AM)">03:00 - 05:00 (AM)</option>
                                    <option value="05:00 - 08:00 (AM)">05:00 - 08:00 (AM)</option>
                                    <option value="08:00 - 12:00 (AM)">08:00 - 12:00 (AM)</option>
                                    <option value="12:00 - 15:00 (PM)">12:00 - 15:00 (PM)</option>
                                    <option value="15:00 - 19:00 (PM)">15:00 - 19:00 (PM)</option>
                                    <option value="19:00 - 22:00 (PM)">19:00 - 22:00 (PM)</option>
                                    <option value="22:00 - 24:00 (PM)">22:00 - 24:00 (PM)</option>
                                </select>
                                </div>
                        </div>

                        {
                            checkSendOk?<div className='alert-ok'>Đặt lịch thành công !</div>:null
                        }


                        {
                            CheckSendErr?<div className='alert-er'>Đặt lịch không thành công !</div>:null
                        }
                        
                        

                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-success1">Đặt lịch</button>                      
                        </div>



                    </form>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default BookDoctorContent