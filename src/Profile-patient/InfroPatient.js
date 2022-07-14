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

function InfroPatient(props) {
  const idAccountProfile = localStorage.getItem("id");

  const renderData =
    props.childrenData &&
    props.childrenData?.filter(
      (renderData) => renderData.idAccount == idAccountProfile
    )[0];
  console.log(renderData);
  return (
    <>
      <div className="form-add form-info-profile">
        <div className="form-info-profile-title">
          <p>HỒ SƠ CỦA BẠN</p>
        </div>
        <form>
          <div className="format-form-info d-flex ">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Họ và tên :
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.fullName}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Số điện thoại :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.phoneNumber}
                </span>
              </label>
            </div>
          </div>

          <div className="format-form-info d-flex">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Ngày sinh :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.date}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Số CMND/CCCD :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.passport}
                </span>
              </label>
            </div>
          </div>

          <div className="d-md-flex justify-content-start align-items-center mb-4 py-2 form-outline fomat-form">
            <label
              className="form-label"
              style={{ display: "flex", alignItems: "center" }}
            >
              Giới tính :
              <span
                style={{
                  fontSize: "16px",
                  color: "#4d4d4d",
                  marginLeft: "10px",
                }}
              >
                {renderData.sex}
              </span>
            </label>

            <div className="form-check form-check-inline mb-0 me-4"></div>
          </div>

          <div className="format-form-info d-flex">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Quốc gia :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.country}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Tỉnh/TP :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.state}
                </span>
              </label>
            </div>
          </div>

          <div className="format-form-info d-flex">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Xã/Thị trấn :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.town}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Thôn/tổ :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.village}
                </span>
              </label>
            </div>
          </div>

          <div className="format-form-info d-flex">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Địa chỉ :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.location}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Dân tộc :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.nation}
                </span>
              </label>
            </div>
          </div>

          <div className="format-form-info d-flex">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Email :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.mail}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Số thẻ bảo hiểm y tế :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.healthInsurance}
                </span>
              </label>
            </div>
          </div>

          <div className="format-form-info d-flex">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Tên thân nhân :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.relativeName}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Số điện thoại thân nhân :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.relativeNumber}
                </span>
              </label>
            </div>
          </div>

          <div className="format-form-info d-flex">
            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Email thân nhân :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.relativeMail}
                </span>
              </label>
            </div>

            <div className="form-outline mb-4 col-md-6">
              <label
                className="form-label"
                style={{ display: "flex", alignItems: "center" }}
              >
                Quan hệ :
                <span
                  style={{
                    fontSize: "16px",
                    color: "#4d4d4d",
                    marginLeft: "10px",
                  }}
                >
                  {renderData.relative}
                </span>
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn-info-profile">
              Sửa hồ sơ
            </button>

            <button type="submit" className="btn-info-profile">
              Xoá hồ sơ
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default InfroPatient;
