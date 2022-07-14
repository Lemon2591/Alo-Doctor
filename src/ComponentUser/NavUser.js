import React, { useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import "./NavUser.css";
import logo from "../assets/img/logo.png";
import "../assets/hover.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiFillCaretUp } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function NavUser() {
  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showIon, setShowIcon] = useState(false);
  const [showInfoAccount, setShowInfoAccount] = useState(false);

  const removeToken = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("nameUser");
    localStorage.removeItem("id");
  };

  return (
    <>
      <div className="top-navbar">
        <div className="top-bar">
          <ul className="top-bar-list">
            <li className="top-bar-list-item1">
              <a className="" href='tel:"0868158218'>
                <i>
                  {" "}
                  <FiPhoneCall />{" "}
                </i>
                Hỗ trợ chuyên môn: +84 - 868 158 218
              </a>
            </li>
            <li className="top-bar-list-item2">
              <a className="" href="tel:0868158218">
                <i>
                  {" "}
                  <FiPhoneCall />{" "}
                </i>
                Hỗ trợ kỹ thuật: +84 - 868 158 218
              </a>
            </li>
            <li className="top-bar-list-log-in">
              <NavLink
                className="top-bar-list-log-in-item"
                to="#"
                onClick={() => setShowInfoAccount(!showInfoAccount)}
              >
                <i>
                  {" "}
                  <BiUserCircle />
                </i>
                Thông tin tài khoản
              </NavLink>
            </li>
          </ul>
        </div>
        {showInfoAccount ? (
          <div className="info-account">
            <div className="info-account-content">
              <i>
                <AiOutlineUser />
              </i>
              <ul>
                <li className="accout-hello">Xin chào !</li>

                <li className="line-decoration">
                  {localStorage.getItem("nameUser")}
                </li>

                <li className="line-decoration">
                  <NavLink className="router-format" to="./PatientProfile">
                    Hồ sơ khám bệnh
                  </NavLink>
                </li>

                <li className="line-decoration">
                  <NavLink className="router-format" to="./MedicalBill">
                    Phiếu khám bệnh
                  </NavLink>
                </li>

                <li className="line-decoration">
                  <a href="/" className="router-format" onClick={removeToken}>
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}

        {show ? <div className="bg-menu-mobie"></div> : null}

        {show ? (
          <div className="list-menu-mobie" id="menu-mobile">
            <div className="list-menu-mobie-container">
              <i onClick={() => setShow(false)}>
                <AiOutlineClose />
              </i>
              <ul className="d-flex list-login-menu">
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/PatientProfile">
                    HỒ SƠ CỦA BẠN
                  </NavLink>
                </li>
              </ul>

              <ul className="list-nav-link-menu">
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie active" to="/HomeUser">
                    TRANG CHỦ
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/IntroUser">
                    GIỚI THIỆU
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/ProcedureUser">
                    QUY TRÌNH
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink
                    className="nav-link-mobie"
                    to="/UsingInstructionsUser"
                  >
                    HƯỚNG DẪN SỬ DỤNG
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/ContactUser">
                    LIÊN HỆ
                  </NavLink>
                </li>
                <li>
                  <a
                    href="/Login"
                    className="router-format"
                    style={{ fontSize: "18px", fontWeight: "800" }}
                  >
                    {" "}
                    ĐĂNG XUẤT
                  </a>
                </li>
              </ul>

              <ul className="list-nav-link-menu">
                <li className="">Hotline: 1900 100</li>
                <li className="">Email: cnnhok6262@gmailcom</li>
              </ul>
            </div>
          </div>
        ) : null}

        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-mobile-icon">
              <i onClick={() => setShow(true)}>
                <AiOutlineMenu />
              </i>
            </div>
            <div className="nav-logo">
              <a href="./HomeUser">
                <img src={logo}></img>
              </a>
            </div>
            <div className="nav-list-link">
              <ul className="list-item-all">
                <li className="nav-item  active">
                  <NavLink className="nav-item-link active" to="/HomeUser">
                    TRANG CHỦ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item-link " to="/IntroUser">
                    GIỚI THIỆU
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item-link" to="/ProcedureUser">
                    QUY TRÌNH
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-item-link"
                    to="/UsingInstructionsUser"
                  >
                    HƯỚNG DẪN SỬ DỤNG
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-item-link" to="/ContactUser">
                    LIÊN HỆ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-btn">
              <button
                className="nav-btn-click"
                onClick={() => setShowList(!showList)}
              >
                CHỌN DỊCH VỤ{" "}
              </button>
            </div>
          </div>
        </div>

        {showList ? (
          <div className="List-Support-Container">
            <div className="ListSupport-content">
              <ul>
                <li>
                  <NavLink className="fomat-list-support" to="./BookDoctor">
                    ĐẶT LỊCH BÁC SĨ
                  </NavLink>
                </li>

                <li>
                  <NavLink className="fomat-list-support" to="./BookDate">
                    ĐẶT LỊCH THEO NGÀY{" "}
                  </NavLink>
                </li>

                <li>
                  <a>ĐẠT LỊCH TÁI KHÁM</a>
                </li>

                <li>
                  <a>GẶP BÁC SĨ TƯ VẤN</a>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default NavUser;
