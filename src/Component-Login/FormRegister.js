import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./FormRegister.css";

function FormRegister() {
  // const history = useHistory();

  const [isPassword, setIsPassword] = useState(false);

  const [message, setMessage] = useState(false);

  useEffect(() => {}, [message]);

  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [isCheckedForm, setIsCheckedForm] = useState(false);
  const handleChange = (event) => {
    if (event.target.name === "confirmPassword") {
      if (value.password === event.target.value) {
        setIsPassword(true);
      } else {
        setIsPassword(false);
      }
    }

    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    if (isPassword) {
      setMessage(false);

      if (isCheckedForm) {
        setValue({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
        });

        if (value.role === "BN") {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(value),
          };
          fetch("http://localhost:8000/patientAccount", requestOptions)
            .then((response) => response.json())
            .then(alert("Đăng ký thành công !"))
            .then((window.location.href = "./Login"));
        } else if (value.role === "BS") {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(value),
          };
          fetch("http://localhost:8000/doctorAccount", requestOptions)
            .then((response) => response.json())
            .then(alert("Đăng ký thành công !"))
            .then((window.location.href = "./Login"));
        } else {
          alert("Bạn chưa chọn bệnh nhân hay bác sĩ ?");
        }
      } else {
        alert("Bạn chưa đồng ý với điều khoản !");
      }
    } else {
      setMessage(true);
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
    <div className="FormRegister-Container">
      <p>QUY ĐỊNH</p>
      <div className="FormRegister-content d-flex">
        <div className="rules-container">
          <div className="rules-content">
            <div className="rules-form-crol">
              <div className="">
                <div className="card example-1 scrollbar-deep-purple bordered-deep-purple thin">
                  <div className="card-body">
                    <p>Vui lòng đọc và đồng ý trước khi tiếp tục:</p>
                    <ul>
                      <li>
                        Thời gian đăng ký khám bệnh trong vòng 30 ngày đến 16h30
                        trước ngày khám.
                      </li>

                      <li>
                        Quý khách có thể đăng ký khám 01 hoặc nhiều chuyên khoa.
                      </li>
                      <li>
                        Phí đăng ký khám trực tuyến bao gồm
                        <ul>
                          <li>Tiền khám 01 (hoặc nhiều) chuyên khoa.</li>
                          <li>
                            Phí tiện ích: phí sử dụng dịch vụ đăng ký khám bệnh
                            trực tuyến, bao gồm phí tin nhắn thông báo lịch hẹn,
                            thông báo giao dịch trên tài khoản thẻ, hủy khám,
                            nhắc tái khám...(chỉ trả 01 lần phí tiện ích cho 01
                            lượt đăng ký khám nhiều chuyên khoa).
                          </li>
                        </ul>
                      </li>

                      <li>
                        Phương thức thanh toán: Phí khám bệnh được trừ vào tài
                        khoản thẻ:
                        <ul>
                          <li>
                            Thẻ khám bệnh của Bệnh viện Đại học Y Dược TPHCM:
                            Người bệnh đăng ký chức năng thanh toán trực tuyến
                            tại Bệnh viện hoặc các chi nhánh Vietinbank trước
                            khi sử dụng.
                          </li>
                          <li>
                            Các loại thẻ ATM nội địa (đã kích hoạt thanh toán
                            trực tuyến).
                          </li>

                          <li>
                            Các thẻ thanh toán quốc tế (Visa/MasterCard…).
                          </li>
                        </ul>
                      </li>

                      <li>
                        Phiếu khám bệnh được gửi đến Quý khách qua email và tin
                        nhắn SMS ngay sau khi đăng ký khám bệnh thành công.
                      </li>

                      <li>
                        Đến ngày khám, Người bệnh có mặt trước trong vòng 15-30
                        phút:
                        <ul>
                          <li>
                            Người bệnh đủ điều kiện hưởng BHYT tại Bệnh viện:
                            đến quầy đăng ký khám bệnh 12,13,14 tầng trệt khu A
                            xác nhận BHYT.
                          </li>
                          <li>
                            Người bệnh không BHYT: đến thẳng phòng khám chuyên
                            khoa theo lịch hẹn.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Trường hợp hủy hoặc đổi khám:
                        <ul>
                          <li>Chỉ thực hiện đến 16h30 trước ngày khám.</li>

                          <li>
                            Quý khách thực hiện việc hủy phiếu, hoặc hủy phiếu
                            và đặt lịch khám mới trên App/Website.
                          </li>

                          <li>
                            Tiền khám bệnh sẽ chuyển lại tài khoản thẻ đã sử
                            dụng thanh toán.
                          </li>

                          <li>Phí tiện ích sẽ không được hoàn trả.</li>

                          <li>
                            Thời gian nhận lại tiền khám (Theo quy định của ngân
                            hàng):
                            <ul>
                              <li>
                                Các loại thẻ ATM nội địa: từ 01 đến 05 ngày làm
                                việc.
                              </li>

                              <li>
                                Thẻ thanh toán quốc tế (Visa/MasterCard…): từ 05
                                đến 45 ngày làm việc.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="FormRegister-content-form">
          <section className="vh-100 bg-image">
            <div className="mask align-items-center h-100 gradient-custom-3">
              <div className="container h-100">
                <div className=" justify-content-center align-items-center h-100">
                  <div className="">
                    <div className="card">
                      <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">
                          Đăng ký
                        </h2>

                        <form onSubmit={handleFormSubmit}>
                          <div className="form-outline mb-4">
                            <label className="form-label" for="userName">
                              Vui lòng nhập tên tài khoản
                            </label>
                            <input
                              name="userName"
                              type="text"
                              id="form3Example1cg"
                              className="form-control form-control-lg"
                              placeholder="Vui lòng nhập tên tài khoản"
                              required
                              value={value.userName}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="email">
                              Vui lòng nhập địa chỉ Email
                            </label>
                            <input
                              name="email"
                              type="email"
                              id="form3Example3cg"
                              className="form-control form-control-lg"
                              placeholder="Vui lòng nhập địa chỉ Email"
                              required
                              value={value.email}
                              onChange={handleChange}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="password">
                              Vui lòng nhâp mật khẩu
                            </label>
                            <input
                              name="password"
                              type="password"
                              id="form3Example4cg"
                              className="form-control form-control-lg"
                              placeholder="Vui lòng nhâp mật khẩu"
                              required
                              value={value.password}
                              onChange={handleChange}
                            />

                            {message ? (
                              <label
                                className="form-label"
                                style={{ color: "red" }}
                              >
                                Mật khẩu chưa trùng khớp
                              </label>
                            ) : null}
                          </div>

                          <div className="form-outline mb-4">
                            <label className="form-label" for="confirmPassword">
                              Vui lòng nhập lại mật khẩu
                            </label>
                            <input
                              name="confirmPassword"
                              type="password"
                              id="form3Example4cdg"
                              className="form-control form-control-lg"
                              placeholder="Vui lòng nhập lại mật khẩu"
                              value={value.confirmPassword}
                              required
                              onChange={handleChange}
                            />
                            {message ? (
                              <label
                                className="form-label"
                                style={{ color: "red" }}
                              >
                                Mật khẩu chưa trùng khớp
                              </label>
                            ) : null}
                          </div>

                          <div className="d-md-flex justify-content-start align-items-center mb-4 py-2 mobile-format">
                            <h6 className="mb-0 me-4">
                              Bạn là bác sĩ hay bệnh nhân :
                            </h6>

                            <div className="form-check form-check-inline mb-0 me-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="role"
                                id="femaleGender"
                                value="BS"
                                onChange={handleChange}
                              />
                              <label className="form-check-label" for="role">
                                Bác sĩ
                              </label>
                            </div>

                            <div className="form-check form-check-inline mb-0 me-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                id="maleGender"
                                value="BN"
                                name="role"
                                onChange={handleChange}
                              />
                              <label className="form-check-label" for="role">
                                Bệnh nhân
                              </label>
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
                              Tôi đồng ý với tất cả{" "}
                              <a href="#!" className="text-body">
                                <u>Điều Khoản</u>
                              </a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                            >
                              Đăng Ký
                            </button>
                          </div>

                          <p className="text-center text-muted mt-5 mb-0">
                            Bạn đã có tài khoản{" "}
                            <NavLink to="../Login">Đăng nhập ngay?</NavLink>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FormRegister;
