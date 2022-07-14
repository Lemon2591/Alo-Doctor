import React, { useState } from "react";
import ProfilePhoto from "../assets/img/blur-05.jpeg";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function MedicalBillProfile() {
  const [showProfile, setShowPriofile] = useState(false);

  const [value, setValue] = useState({
    fullName: "",
    phoneNumber: "",
    date: "",
    sex: "",
    country: "",
    state: "",
    town: "",
    nation: "",
    village: "",
    mail: "",
    location: "",
    passport: "",
    relativeName: "",
    relativeNumber: "",
    healthInsurance: "",
    relativeMail: "",
    relative: "",
  });

  const [isCheckedForm, setIsCheckedForm] = useState(false);
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    if (isCheckedForm) {
      setValue({
        fullName: "",
        phoneNumber: "",
        date: "",
        sex: "",
        country: "",
        state: "",
        town: "",
        nation: "",
        village: "",
        mail: "",
        location: "",
        passport: "",
        relativeName: "",
        relativeNumber: "",
        healthInsurance: "",
        relativeMail: "",
        relative: "",
      });

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      };
      fetch("http://localhost:8000/profilePatient", requestOptions)
        .then((response) => response.json())
        .then(alert("Đăng ký thành công !"));
    } else {
      alert("Bạn chưa đồng ý với điều khoản !");
    }

    event.preventDefault();
  };

  const CheckRegisterBlank = (event) => {
    if (event.target.checked) {
      setIsCheckedForm(true);
    } else {
      setIsCheckedForm(false);
    }
  };
  return (
    <>
      <div className="Siler-Patient">
        <div className="slider-content">
          <img src={ProfilePhoto}></img>
        </div>
      </div>

      <div className="Info-Patient-container">
        <div className="info-patient-content">
          <div className="List-router-profile">
            <ul>
              <li>
                <p>
                  Tài khoản của <span>{localStorage.getItem("nameUser")}</span>
                </p>
              </li>
              <li>
                <i>
                  <AiOutlineProfile />
                </i>
                <NavLink className="router-format" to="/PatientProfile">
                  Hồ sơ bệnh nhân
                </NavLink>
              </li>
              <li className="active-class-info">
                <i>
                  <MdOutlineAirplaneTicket />
                </i>
                <NavLink
                  style={{ color: "#0d6efd" }}
                  className="router-format"
                  to="/PatientProfile"
                >
                  Phiếu khám bệnh
                </NavLink>
              </li>
              <li>
                <i>
                  <IoNotificationsCircleOutline />
                </i>
                <p>Thông báo ( Tính năng sắp có )</p>
              </li>
              <li>
                <i>
                  <AiOutlineCreditCard />
                </i>
                <p>Lịch sử thanh toán viện phí( Tính năng sắp có )</p>
              </li>
            </ul>
          </div>

          <div className="profile-patient">
            <div className="add-info">
              <div
                onClick={() => setShowPriofile(true)}
                className="location-add"
              >
                <div style={{ fontSize: "14px", fontStyle: "italic" }}>
                  Bạn chưa có phiếu khám bệnh nào !
                </div>
              </div>
              {/* { showProfile?<div className='form-add'>
                  <form onSubmit={handleFormSubmit} > 

                      <div className='format-form-info d-flex '>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="fullName" >Họ và tên</label>
                          <input name='fullName' type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Vui lòng nhập họ và tên (có dấu )'
                          required 
                          value={value.fullName}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="phoneNumber" >Số điện thoại</label>
                          <input name='phoneNumber' type="text" id="form3Example3cg" className="form-control form-control-lg" placeholder='Vui lòng nhập số điệnh thoại' 
                          required
                          value={value.phoneNumber}
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className='format-form-info d-flex'>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="date" >Ngày sinh </label>
                          <input name='date' type="date" id="form3Example4cg" className="form-control form-control-lg"
                          required
                          value={value.date}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="passport">Nhập số CMND/CC</label>
                          <input name='passport' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Nhập số CMND/CC'
                          value={value.passport}
                          required
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2 form-outline fomat-form">

                          <h6 className="mb-0 me-4">Giới tính :</h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                              <input
                              className="form-check-input"
                              type="radio"
                              name="sex"
                              id="femaleGender"
                              value="Nam"
                              onChange={handleChange}
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
                              onChange={handleChange}
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
                              onChange={handleChange}
                              />
                              <label className="form-check-label" for="sex">Khác</label>
                          </div>

                      </div>

                      <div className='format-form-info d-flex'>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="country" >Quốc gia </label>
                          <input name='country' type="text" id="form3Example4cg" className="form-control form-control-lg" placeholder='Quốc Gia'
                          required
                          value={value.country}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="state">Tỉnh/TP</label>
                          <input name='state' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Tỉnh/TP'
                          value={value.state}
                          required
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className='format-form-info d-flex'>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="town" >Xã/Thị Trấn</label>
                          <input name='town' type="text" id="form3Example4cg" className="form-control form-control-lg" placeholder='Xã/Thị Trấn'
                          required
                          value={value.town}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="village">Thôn/Tổ</label>
                          <input name='village' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Thôn/Tổ'
                          value={value.village}
                          required
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className='format-form-info d-flex'>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="location" >Địa chỉ</label>
                          <input name='location' type="text" id="form3Example4cg" className="form-control form-control-lg" placeholder='Địa chỉ'
                          required
                          value={value.location}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="nation">Dân tộc</label>
                          <input name='nation' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Dân tộc'
                          value={value.nation}
                          required
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className='format-form-info d-flex'>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="mail" >Email ( Nhận hồ sơ điện tử )</label>
                          <input name='mail' type="email" id="form3Example4cg" className="form-control form-control-lg" placeholder='Email ( Nhận hồ sơ điện tử )'
                          required
                          value={value.mail}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="healthInsurance">Số thẻ BHYT ( nếu có )</label>
                          <input name='healthInsurance' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Số thẻ BHYT ( nếu có )'
                          value={value.healthInsurance}
                          required
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className='format-form-info d-flex'>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="relativeName" >Tên thân nhân</label>
                          <input name='relativeName' type="text" id="form3Example4cg" className="form-control form-control-lg" placeholder='Tên thân nhân'
                          required
                          value={value.relativeName}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="relativeNumber">Số điện thoại thân nhân</label>
                          <input name='relativeNumber' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Số điện thoại thân nhân'
                          value={value.relativeNumber}
                          required
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className='format-form-info d-flex'>
                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="relativeMail" >Địa chỉ Eail thân nhân</label>
                          <input name='relativeMail' type="email" id="form3Example4cg" className="form-control form-control-lg" placeholder='Địa chỉ Eail thân nhân'
                          required
                          value={value.relativeMail}
                          onChange={handleChange}
                          />
                          </div>

                          <div className="form-outline mb-4 col-md-6">
                          <label className="form-label" for="relative">Quan hệ</label>
                          <input name='relative' type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Quan hệ'
                          value={value.relative}
                          required
                          onChange={handleChange}
                          />
                          </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                      <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          required=''
                          id="form2Example3cg"
                          onChange={CheckRegisterBlank}
                      />
                      <label className="form-check-label">
                          Tôi cam kết thông tin trên là đúng.
                      </label>
                      </div>
                      

                      <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Tạo hồ sơ</button>
                    </div>



                  </form>
                </div>:null} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedicalBillProfile;
