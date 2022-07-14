import "./FormLogin.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function FormLogin() {
  // const history = useHistory();

  const [chekcLogin, setCheckLogin] = useState(false);
  const [checkRoleLogin, setCheckRoleLogin] = useState(1);

  const selectRoleLogin = (index) => {
    setCheckRoleLogin(index);
  };

  useEffect(() => {}, [chekcLogin]);

  const [value, setValue] = useState({
    userName: "",

    password: "",
  });

  const [isCheckedForm, setIsCheckedForm] = useState(false);

  const handleChange = (event) => {
    localStorage.setItem("nameUser", value.userName);
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmitBN = (event) => {
    setValue({
      userName: "",

      password: "",
    });

    const requestOptions = {
      method: "GET",
    };
    fetch("http://localhost:8000/patientAccount")
      .then((response) => response.json())
      .then((data) => {
        if (data.length == 0) {
          setCheckLogin(true);
          setValue({
            userName: "",

            password: "",
          });
        } else {
          let loginOk = false;
          for (let i = 0; i < data.length; i++) {
            if (
              value.password === data[i].password &&
              value.userName === data[i].userName
            ) {
              function makeid(length) {
                var text = "";
                var possible =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < length; i++)
                  text += possible.charAt(
                    Math.floor(Math.random() * possible.length)
                  );

                return text;
              }
              loginOk = true;
              localStorage.setItem("token", makeid(100));
              window.location.href = "./HomeUser";
              localStorage.setItem("id", data[i].id);
            }
          }
          if (!loginOk) {
            setCheckLogin(true);
            setValue({
              userName: "",
              password: "",
            });
          }
        }
      });

    event.preventDefault();
  };

  const handleFormSubmitBS = (event) => {
    setValue({
      userName: "",

      password: "",
    });

    const requestOptions = {
      method: "GET",
    };
    fetch(`http://localhost:8000/doctorAccount`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length == 0) {
          setCheckLogin(true);
          setValue({
            userName: "",

            password: "",
          });
        } else {
          if (
            value.password === data[0].password &&
            value.userName === data[0].userName
          ) {
            function makeid(length) {
              var text = "";
              var possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

              for (var i = 0; i < length; i++)
                text += possible.charAt(
                  Math.floor(Math.random() * possible.length)
                );

              return text;
            }
            localStorage.setItem("token", makeid(100));
            window.location.href = "./HomeDoctor";
          } else {
            setCheckLogin(true);
            setValue({
              userName: "",

              password: "",
            });
          }
        }
      });

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
    <div>
      <div className="Login-Content">
        <p>QUY ĐỊNH</p>
        <div className="tab-content">
          <div className="rules-content rules-content-login">
            <div className="rules-form-crol">
              <div className="">
                <div className="card example-1 example-1-format scrollbar-deep-purple bordered-deep-purple thin">
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

          <div
            className="tab-pane fade show active login-form-format bg-format"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <div className="router-author">
              <div
                className={
                  checkRoleLogin === 1
                    ? "router-bn active-router-author"
                    : "router-bn"
                }
                onClick={() => selectRoleLogin(1)}
              >
                Bệnh nhân
              </div>

              <div
                className={
                  checkRoleLogin === 2
                    ? "router-bs active-router-author"
                    : "router-bs"
                }
                onClick={() => selectRoleLogin(2)}
              >
                Bác sĩ
              </div>
            </div>

            <form
              className={
                checkRoleLogin === 1 ? "login-bn login-active" : "login-bn"
              }
              onSubmit={handleFormSubmitBN}
            >
              {/* <h5 className="text-uppercase text-center mb-5">Login</h5> */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="userName">
                  Tên tài khoản
                </label>
                <input
                  type="text"
                  id="loginNameBN"
                  className="form-control"
                  name="userName"
                  required
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="loginPasswordBN"
                  className="form-control"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="Password"
                />
                {chekcLogin ? (
                  <label className="form-label" style={{ color: "red" }}>
                    Thông tin tài khoản hoặc mật khẩu không chinh xác !
                  </label>
                ) : null}
              </div>
              <div className="login-btn">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Đăng Nhập
                </button>
              </div>
              <div className="text-center">
                <p>
                  Bạn chưa có tài khoản
                  <NavLink to="../Register">Đăng ký ngay ?</NavLink>
                </p>
              </div>
            </form>

            <form
              className={
                checkRoleLogin === 2 ? "login-bs login-active" : "login-bs"
              }
              onSubmit={handleFormSubmitBS}
            >
              {/* <h5 className="text-uppercase text-center mb-5">Login</h5> */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="userName">
                  Tên tài khoản
                </label>
                <input
                  type="text"
                  id="loginNameBS"
                  className="form-control"
                  name="userName"
                  required
                  onChange={handleChange}
                  placeholder="Username"
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="loginPasswordBS"
                  className="form-control"
                  name="password"
                  required
                  onChange={handleChange}
                  placeholder="Password"
                />
                {chekcLogin ? (
                  <label className="form-label" style={{ color: "red" }}>
                    Thông tin tài khoản hoặc mật khẩu không chinh xác !
                  </label>
                ) : null}
              </div>
              <div className="login-btn">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Đăng Nhập
                </button>
              </div>
              <div className="text-center">
                <p>
                  Bạn chưa có tài khoản
                  <NavLink to="../Register">Đăng ký ngay ?</NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
