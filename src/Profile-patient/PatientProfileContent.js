import React, { useState } from "react";
import ProfilePhoto from "../assets/img/blur-05.jpeg";
import "./PatientContent.css";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import {
  IoConstructOutline,
  IoNotificationsCircleOutline,
} from "react-icons/io5";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import InfroPatient from "./InfroPatient";

function PatientProfileContent() {
  const [showProfile, setShowPriofile] = useState(false);
  const [getData, setGetData] = useState("");
  const [showAddProfile, setshowAddProfile] = useState(false);
  const [showInfoProFile, setShowInfoProfile] = useState(false);
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
    idAccount: localStorage.getItem("id"),
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
        .then(alert("????ng k?? th??nh c??ng !"))
        .then(window.reload());
    } else {
      alert("B???n ch??a ?????ng ?? v???i ??i???u kho???n !");
    }

    event.preventDefault();
  };

  const idAccountProfile = localStorage.getItem("id");
  useEffect(() => {
    const renderProfile = () => {
      fetch("http://localhost:8000/profilePatient", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) {
            setshowAddProfile(true);
          } else {
            for (let j = 0; j < data.length; j++) {
              if (data[j].idAccount == idAccountProfile) {
                setshowAddProfile(false);
                setShowInfoProfile(true);
                break;
              } else {
                setshowAddProfile(true);
              }
            }
          }
          // let boolVar = !data.some((ele) => ele.idAccount == idAccountProfile);
          // setshowAddProfile((prev) => {
          //   console.log("set");
          //   return false;
          // });
          // setGetData((prev) => {
          //   console.log("data");
          //   return data;
          // });
          setGetData(data);
        });
      // console.log("use effect");
    };

    renderProfile();
  }, [idAccountProfile]);
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
                  T??i kho???n c???a <span>{localStorage.getItem("nameUser")}</span>
                </p>
              </li>
              <li className="active-class-info">
                <i>
                  <AiOutlineProfile />
                </i>
                <NavLink
                  className="router-format"
                  style={{ color: "#0d6efd" }}
                  to="/PatientProfile"
                >
                  H??? s?? b???nh nh??n
                </NavLink>
              </li>
              <li>
                <i>
                  <MdOutlineAirplaneTicket />
                </i>
                <NavLink className="router-format" to="/MedicalBill">
                  Phi???u Kh??m b???nh
                </NavLink>
              </li>
              <li>
                <i>
                  <IoNotificationsCircleOutline />
                </i>
                <p>Th??ng b??o ( T??nh n??ng s???p c?? )</p>
              </li>
              <li>
                <i>
                  <AiOutlineCreditCard />
                </i>
                <p>L???ch s??? thanh to??n vi???n ph??( T??nh n??ng s???p c?? )</p>
              </li>
            </ul>
          </div>
          <div className="profile-patient">
            <div className="add-info">
              {showInfoProFile ? <InfroPatient childrenData={getData} /> : null}
              {showAddProfile ? (
                <div
                  onClick={() => setShowPriofile(true)}
                  className="location-add"
                >
                  <i>
                    <AiOutlineFileAdd />
                  </i>{" "}
                  <div>Ch??a c?? h??? s??, th??m h??? s?? t???i ????y !</div>
                </div>
              ) : null}
              {showProfile ? (
                <div className="form-add">
                  <form onSubmit={handleFormSubmit}>
                    <div className="format-form-info d-flex ">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="fullName">
                          H??? v?? t??n
                        </label>
                        <input
                          name="fullName"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Vui l??ng nh???p h??? v?? t??n (c?? d???u )"
                          required
                          value={value.fullName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="phoneNumber">
                          S??? ??i???n tho???i
                        </label>
                        <input
                          name="phoneNumber"
                          type="text"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          placeholder="Vui l??ng nh???p s??? ??i???nh tho???i"
                          required
                          value={value.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="format-form-info d-flex">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="date">
                          Ng??y sinh{" "}
                        </label>
                        <input
                          name="date"
                          type="date"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          required
                          value={value.date}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="passport">
                          Nh???p s??? CMND/CC
                        </label>
                        <input
                          name="passport"
                          type="text"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="Nh???p s??? CMND/CC"
                          value={value.passport}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2 form-outline fomat-form">
                      <h6 className="mb-0 me-4">Gi???i t??nh :</h6>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sex"
                          id="femaleGender"
                          value="Nam"
                          onChange={handleChange}
                        />
                        <label className="form-check-label" for="sex">
                          Nam
                        </label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="maleGender"
                          value="N???"
                          name="sex"
                          onChange={handleChange}
                        />
                        <label className="form-check-label" for="sex">
                          N???
                        </label>
                      </div>

                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="maleGender"
                          value="Kh??c"
                          name="sex"
                          onChange={handleChange}
                        />
                        <label className="form-check-label" for="sex">
                          Kh??c
                        </label>
                      </div>
                    </div>

                    <div className="format-form-info d-flex">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="country">
                          Qu???c gia{" "}
                        </label>
                        <input
                          name="country"
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="Qu???c Gia"
                          required
                          value={value.country}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="state">
                          T???nh/TP
                        </label>
                        <input
                          name="state"
                          type="text"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="T???nh/TP"
                          value={value.state}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="format-form-info d-flex">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="town">
                          X??/Th??? Tr???n
                        </label>
                        <input
                          name="town"
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="X??/Th??? Tr???n"
                          required
                          value={value.town}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="village">
                          Th??n/T???
                        </label>
                        <input
                          name="village"
                          type="text"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="Th??n/T???"
                          value={value.village}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="format-form-info d-flex">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="location">
                          ?????a ch???
                        </label>
                        <input
                          name="location"
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="?????a ch???"
                          required
                          value={value.location}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="nation">
                          D??n t???c
                        </label>
                        <input
                          name="nation"
                          type="text"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="D??n t???c"
                          value={value.nation}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="format-form-info d-flex">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="mail">
                          Email ( Nh???n h??? s?? ??i???n t??? )
                        </label>
                        <input
                          name="mail"
                          type="email"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="Email ( Nh???n h??? s?? ??i???n t??? )"
                          required
                          value={value.mail}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="healthInsurance">
                          S??? th??? BHYT ( n???u c?? )
                        </label>
                        <input
                          name="healthInsurance"
                          type="text"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="S??? th??? BHYT ( n???u c?? )"
                          value={value.healthInsurance}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="format-form-info d-flex">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="relativeName">
                          T??n th??n nh??n
                        </label>
                        <input
                          name="relativeName"
                          type="text"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="T??n th??n nh??n"
                          required
                          value={value.relativeName}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="relativeNumber">
                          S??? ??i???n tho???i th??n nh??n
                        </label>
                        <input
                          name="relativeNumber"
                          type="text"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="S??? ??i???n tho???i th??n nh??n"
                          value={value.relativeNumber}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="format-form-info d-flex">
                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="relativeMail">
                          ?????a ch??? Email th??n nh??n
                        </label>
                        <input
                          name="relativeMail"
                          type="email"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="?????a ch??? Email th??n nh??n"
                          required
                          value={value.relativeMail}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-6">
                        <label className="form-label" for="relative">
                          Quan h???
                        </label>
                        <input
                          name="relative"
                          type="text"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="Quan h???"
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
                        required=""
                        id="form2Example3cg"
                        onChange={CheckRegisterBlank}
                      />
                      <label className="form-check-label">
                        T??i cam k???t th??ng tin tr??n l?? ????ng.
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        T???o h??? s??
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientProfileContent;
